/**
 * App.jsx — Root component
 * Sets up React Router with all pages and shared layout
 * (Navbar, Footer, WhatsApp float button).
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import Navbar          from './components/layout/Navbar/Navbar';
import Footer          from './components/layout/Footer/Footer';
import WhatsAppButton  from './components/common/WhatsAppButton/WhatsAppButton';

// Pages
import Home       from './pages/Home/Home';
import About      from './pages/About/About';
import Programs   from './pages/Programs/Programs';
import Activities from './pages/Activities/Activities';
import Facilities from './pages/Facilities/Facilities';
import Gallery    from './pages/Gallery/Gallery';
import Admissions from './pages/Admissions/Admissions';
import FAQ        from './pages/FAQ/FAQ';
import Contact    from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      {/* Sticky top navigation */}
      <Navbar />

      {/* Page content */}
      <main>
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/about"      element={<About />} />
          <Route path="/programs"   element={<Programs />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery"    element={<Gallery />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/enroll"     element={<Admissions />} />
          <Route path="/faq"        element={<FAQ />} />
          <Route path="/contact"    element={<Contact />} />
        </Routes>
      </main>

      {/* Persistent footer */}
      <Footer />

      {/* Floating WhatsApp button (always visible) */}
      <WhatsAppButton />
    </Router>
  );
}

export default App;

