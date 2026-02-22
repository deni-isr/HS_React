import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { MediaProvider } from './contexts/MediaContext';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Upload from './pages/Upload.tsx';

function App() {
  return (
    <MediaProvider>
      <Router>
        <nav style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '15px', borderBottom: '1px solid #dbdbdb' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Etusivu</Link>
          <Link to="/upload" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>+ Lisää</Link>
          <Link to="/profile" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Profiili</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </Router>
    </MediaProvider>
  );
}

export default App;