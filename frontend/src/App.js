import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Menu from './Components/Menu';
import AboutUs from './Components/AboutUs';
import Order from './Components/Order';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<AboutUs />}/>
        <Route path="menu" element={<Menu />}/>
        <Route path="order" element={<Order />}/>
      </Routes>
    </div>
  );
}

export default App;
