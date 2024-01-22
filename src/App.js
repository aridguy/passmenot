// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Notfound from './Component/Notfound';
import Contact from './Routes/Contact';
import Home from './Routes/Home';
import Blogs from './Routes/Blogs';

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
