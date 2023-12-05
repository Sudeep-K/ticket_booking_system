import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import EventDetails from './pages/EventDetails/EventDetails';

function App() {
  return (
    <div className='bg-[#13131A]'>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event-details/:id" element={<EventDetails />} />
      </Routes>
    </div>
  );
}

export default App;
