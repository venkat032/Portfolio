import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const followerSpringConfig = { damping: 35, stiffness: 150, mass: 0.8 };
  const followerXSpring = useSpring(cursorX, followerSpringConfig);
  const followerYSpring = useSpring(cursorY, followerSpringConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <Router>
      <div className="bg-[#030305] text-white min-h-screen relative font-sans overflow-x-hidden">
        <motion.div
          className="custom-cursor hidden md:block pointer-events-none z-[9999]"
          style={{ x: cursorXSpring, y: cursorYSpring, translateX: '-50%', translateY: '-50%' }}
        />
        <motion.div
          className="custom-cursor-follower hidden md:block pointer-events-none z-[9998]"
          style={{ x: followerXSpring, y: followerYSpring, translateX: '-50%', translateY: '-50%' }}
        />

        <Navbar />

        <main className="relative z-10 w-full flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </main>

        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
