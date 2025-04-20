import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme, Theme } from '../theme/ThemeContext';
import MoodPopup from './MoodPopup';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen">
      <nav className="p-4 border-b border-neutral-700 flex justify-between items-center bg-black text-white">
        <Link to="/" className="text-xl font-bold">TabooTalks</Link>
        <div className="space-x-4">
          <Link to="/forum">Forum</Link>
          <Link to="/blog">Blogi</Link>
          <Link to="/admin">Admin</Link>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as Theme)}
            className="bg-neutral-800 text-white rounded p-1"
          >
            <option value="neutral">Neutralny</option>
            <option value="blue">Niebieski</option>
            <option value="green">Zielony</option>
            <option value="safe">Bezpieczny</option>
          </select>
        </div>
      </nav>
      <main className="p-4 max-w-5xl mx-auto">{children}</main>
      <MoodPopup />
    </div>
  );
}