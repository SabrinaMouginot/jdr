import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CreationPersonnage from './pages/CreationPersonnage.jsx';
import Jeu from './pages/Jeu.jsx';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creation-personnage" element={<CreationPersonnage />} />
        <Route path="/jeu" element={<Jeu />} />
      </Routes>
    </div>
  );
}

export default App;
