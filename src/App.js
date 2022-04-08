import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import About from './Pages/About';
import Blogs from './Pages/Blogs';
import ContactMe from './Pages/ContactMe';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Portfolio from './Pages/Portfolio';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/contact-me' element={<ContactMe/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
