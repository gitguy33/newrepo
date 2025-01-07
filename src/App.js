import './App.css';
import { Home } from './components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
