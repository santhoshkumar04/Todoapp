import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Aaxios from './pages/axios';

export default function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Link to="/">Home</Link>
          <Link to="/axios">Axios</Link>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="axios" element={<Aaxios />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>

  );
}


