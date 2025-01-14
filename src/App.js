import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// <<<<<<< HEAD
// import Order from './components/Orderpage';
// =======
import Order from './components/orderpage';
// >>>>>>> 8d7d9daedbed40cd507f3883717f3bc4c011f75e
function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path="/" element={<Order/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;