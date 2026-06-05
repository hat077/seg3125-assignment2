import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Calendar from './components/Calendar';
import IntakeForm from './components/IntakeForm';
import Confirmation from './components/Confirmation';
import UrgentConfirmation from './components/UrgentConfirmation';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/intake-form" element={<IntakeForm />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/urgent-confirmation" element={<UrgentConfirmation />} />
    </Routes>
  )
}

export default App