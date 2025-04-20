<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
=======
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
>>>>>>> 2e6a0de687a3745656eda9f7b6179520971d86ef
