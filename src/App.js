import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Order from './components/OrderPage';
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