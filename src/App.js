import Home from "./pages/Home";
import Main from './pages/Main';
import Disclaimer from "./pages/Disclaimer";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Admin from "./pages/Admin";



function App() {
  return (
    <Router>
      <div>
        <div>
          <Link to="/"></Link>
        </div>
        <div>
          <Link to="/app"></Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/app" element={<Main />}>
        </Route>
        <Route path="/admin" element={<Admin />}>
        </Route>
        <Route path="/disclaimer" element={<Disclaimer />}>
        </Route>
      </Routes>
    </Router>
  );
}



export default App;