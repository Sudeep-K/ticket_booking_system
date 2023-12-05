import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import EventDetails from './pages/EventDetails/EventDetails';
import ConfirmOrder from './pages/ConfirmOrder/ConfirmOrder';
import Invoice from './pages/Invoice/Invoice';

function App() {
  return (
    <div className='bg-[#13131A]'>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/confirm-order/:id/payment" element={<Invoice />} />
        <Route path="/event-details/:id" element={<EventDetails />} />
        <Route path="/confirm-order/:id" element={<ConfirmOrder />} />
      </Routes>
    </div>
  );
}

export default App;
