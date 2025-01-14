import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Order from './components/orderpage'; // Import Order page
import { Home } from './components/homepage'; // Import Home page

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page route */}
          <Route path="/order" element={<Order />} /> {/* Order page route */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;