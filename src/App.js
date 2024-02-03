// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Notfound from './Component/Notfound';
import Contact from './Routes/Contact';
import Home from './Routes/Home';
import Blogs from './Routes/Blogs';
import About from './Routes/About';
import Articles from './Routes/Articles';
import BlogDetails from './Routes/BlogDetails';

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
        <Route index element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogdetails/:id" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="*" element={<Notfound />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
