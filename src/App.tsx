import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import type { MediaItem } from './types';
import MediaCard from './components/MediaCard';

// Простые страницы-компоненты
const Home = ({ items }: { items: MediaItem[] }) => (
  <div>
    <h2>Shorts</h2>
    {items.map(i => <MediaCard key={i.id} item={i} />)}
  </div>
);

const Profile = () => <h2>My Profil</h2>;

function App() {
  // Tilanhallinta (State)
  const [media] = useState<MediaItem[]>([
    { id: 1, title: 'Kuva', type: 'image', url: '../data/img/mountain.jpg', user: 'coder' },
    { 
      id: 1, 
      title: 'kiva video', 
      type: 'video', 
      url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      user: 'student_dev' 
    },
  ]);

  return (
    <Router>
      <nav style={{ padding: '10px', background: '#eee' }}>
        <Link to="/">Shorts</Link> | <Link to="/profile">Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home items={media} />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;