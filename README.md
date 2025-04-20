# TabooTalks Forum

Nowoczesne forum społecznościowe oparte na React, TypeScript, Tailwind, Firebase.

## 🚀 Stack

- **React 18 + TypeScript**
- **Tailwind CSS** (z obsługą motywów, tryb „bezpieczny”)
- **Firebase** (Auth + Firestore)
- **React Router DOM**

---

## 🛠️ Instalacja lokalna

```bash
git clone https://github.com/Tuscad/tabootalks-forum-new.git
cd tabootalks-forum-new
npm install
npm run dev
```

> Upewnij się, że masz skonfigurowane dane Firebase w `main.tsx`.

---

## 🔐 Konfiguracja Firebase

1. Stwórz projekt na [Firebase Console](https://console.firebase.google.com/)
2. Skopiuj dane z `project settings > Web App` i uzupełnij:

```ts
const firebaseConfig = {
  apiKey: '...',
  authDomain: '...',
  projectId: '...',
  storageBucket: '...',
  messagingSenderId: '...',
  appId: '...',
};
```

3. Upewnij się, że masz włączone:
- Firebase Auth (email/password)
- Firestore Database

---

## 🌐 Deploy na Vercel

1. Wejdź na [vercel.com](https://vercel.com/)
2. Import repo z GitHub
3. Ustaw zmienne środowiskowe:
   - `VITE_FIREBASE_API_KEY`, `VITE_FIREBASE_AUTH_DOMAIN`, itd.
4. Gotowe 🚀

---

## 📦 Foldery

```
src/
├── components/     # Layout, MoodPopup
├── hooks/          # useAuth
├── theme/          # ThemeContext
├── pages/          # Forum, Blog, Profile, Admin
```

---

## ✅ Funkcje

- Motywy kolorystyczne (ciemny, zielony, niebieski, bezpieczny)
- Dziennik nastroju (popup z zapisem do Firestore)
- Przełącznik motywu w navbarze
- Obsługa Firebase Auth (logowanie/rejestracja)
- Routing: forum, blog, profil, panel admina

---

## 🧩 W planach

- Blogi i serie tematyczne
- Tryb zen, tryb offline
- Zamazywanie triggerujących słów
- Wsparcie mentorów i punktów empatii
- Forumowe bingo emocji 🎲

---

Z miłością do wspólnoty 💙