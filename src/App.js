import Home from "./pages/Home/index";
import Main from './pages/Main';
import Disclaimer from "./pages/Disclaimer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from "./pages/Admin";

import './style.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/app" element={<Main />}>
        </Route>
        <Route path="/admin" element={<Index />}>
        </Route>
        <Route path="/disclaimer" element={<Disclaimer />}>
        </Route>
      </Routes>
    </Router>
  );
}



export default App;