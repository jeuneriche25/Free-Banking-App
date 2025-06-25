import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/page/Dashboard';
import './App.css'

function App() {

  return (
    <Router>
      <div>
        <h1 className="tim">Bienvenue à mon application React-JS</h1>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>

  
  );
}

export default App;
