<<<<<<< HEAD
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Order from './components/orderpage'; // Import Order page
import { Home } from './components/homepage'; // Import Home page
=======

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderPage from './components/OrderPage';
>>>>>>> a518b6c2836776c0a2b22115d22139af002ea80e

function App() {
  return (
    <div>
<<<<<<< HEAD
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page route */}
          <Route path="/order" element={<Order />} /> {/* Order page route */}
        </Routes>
      </Router>
=======
      <OrderPage/>
>>>>>>> a518b6c2836776c0a2b22115d22139af002ea80e
    </div>
  );
}

export default App;