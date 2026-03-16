import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

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
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
