import './App.css';
import Photo from './component/Photo';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Footer from './component/Footer';
import Contact from './component/Contact';
import About from './component/About';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Vediog from './component/Vediog';
import Ideating from './component/Service/Ideating';
import Activating from './component/Service/Activating';
import Artist from './component/Service/Artist';
import Wedding from './component/Service/Wedding';
import Exhibitions from './component/Service/Exhibitions';
import Intellectual from './component/Service/Intellectual';
import Merchanding from './component/Service/Merchanding';
import Birthday from './component/Service/Birthday';
import Events from './component/Service/Events';
import Service from './component/Service/Service';
import Login from './component/Login';
import Registration from './component/Registration';

import BookEvent from './component/Bookevent';
import Upcoming from './component/Upcoming';

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/login' || location.pathname === '/registration';

  return (
    <div className="App">
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bookevent' element={<BookEvent />} />
        <Route path='/getevent' element={<Upcoming />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={<Service />} />
        <Route path='/photo' element={<Photo />} />
        <Route path='/event' element={<Events />} />
        <Route path='/vedio' element={<Vediog />} />
        <Route path='/idea' element={<Ideating />} />
        <Route path='/artist' element={<Artist />} />
        <Route path='/wedding' element={<Wedding />} />
        <Route path='/activation' element={<Activating />} />
        <Route path='/exhinitions' element={<Exhibitions />} />
        <Route path='/intellectual' element={<Intellectual />} />
        <Route path='/merchanding' element={<Merchanding />} />
        <Route path='/birthday' element={<Birthday />} />  
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
