import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ForumPage from './pages/ForumPage';
import BlogPage from './pages/BlogPage';
import ProfilePage from './pages/ProfilePage';
import FavoritesPage from './pages/FavoritesPage';
import ThreadPage from './pages/ThreadPage';
import AdminPanel from './pages/AdminPanel';
import Layout from './components/Layout';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/forum/:categoryId/thread/:threadId" element={<ThreadPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/profile/:userId" element={<ProfilePage />} />
        <Route path="/profile/:userId/favorites" element={<FavoritesPage />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Layout>
  );
}
