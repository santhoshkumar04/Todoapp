import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Aaxios from './pages/axios';

export default function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="axios" element={<Aaxios />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}


