import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import type { Post } from './types/VisualMedia';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  const [allPosts] = useState<Post[]>([
    {
      id: 1,
      type: 'video',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      user: 'deni_dev',
      caption: 'Моё первое видео на React!'
    },
    {
      id: 2,
      type: 'image',
      url: 'https://picsum.photos/450/450',
      user: 'scool_project',
      caption: 'Просто классная фотка'
    }
  ]);

  return (
    <Router>
      <nav style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '15px', borderBottom: '1px solid #dbdbdb' }}>
        <Link to="/">Лента</Link>
        <Link to="/profile">Профиль</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home posts={allPosts} />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;