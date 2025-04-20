import React from 'react';
import { useEffect, useState } from 'react';
import { db } from '../main';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { useAuth } from '../hooks/useAuth';

const EMOTIONS = ['😄', '🙂', '😐', '😟', '😭'];

export default function MoodPopup() {
  const [visible, setVisible] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const lastShown = localStorage.getItem('lastMoodPopup');
    if (lastShown !== today) setVisible(true);
  }, []);

  const handleSelect = async (mood: string) => {
    if (!user) return;
    const today = new Date().toISOString().split('T')[0];
    await setDoc(doc(db, 'moodEntries', `${user.uid}_${today}`), {
      mood,
      createdAt: serverTimestamp(),
      userId: user.uid,
    });
    localStorage.setItem('lastMoodPopup', today);
    setVisible(false);
  };

  if (!visible || !user) return null;

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-neutral-800 text-white rounded shadow-lg z-50">
      <p className="mb-2">Jak się dzisiaj czujesz?</p>
      <div className="flex gap-2 text-2xl">
        {EMOTIONS.map((emoji) => (
          <button key={emoji} onClick={() => handleSelect(emoji)}>{emoji}</button>
        ))}
      </div>
    </div>
  );
}