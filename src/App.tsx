import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;