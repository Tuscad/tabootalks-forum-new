import { useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { auth } from '../main';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const login = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);
  const register = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);
  const logout = () => signOut(auth);

  return { user, loading, login, register, logout };
}