import { BrowserRouter as Router, Routes, Route, Link } from 'react-router';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Upload from './pages/Upload.tsx';

function App() {
  return (
      <Router>
        <nav className="flex justify-center gap-6 p-5 bg-white border-b border-gray-200 sticky top-0 z-10">
          <Link to="/" className="text-gray-700 hover:text-blue-500 font-semibold transition-colors">Etusivu</Link>
          <Link to="/upload" className="text-gray-700 hover:text-blue-500 font-semibold transition-colors">ADD</Link>
          <Link to="/profile" className="text-gray-700 hover:text-blue-500 font-semibold transition-colors">Profiili</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </Router>
  );
}

export default App;