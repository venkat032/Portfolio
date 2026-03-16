import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = {
    navbar: `fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-4' : 'py-8 bg-transparent'
      }`,
    container: 'container mx-auto px-8 lg:px-12 flex justify-between items-center',
    logo: 'text-2xl font-black text-white tracking-widest flex items-center gap-1 group font-outfit uppercase',
    navLinks: 'hidden md:flex gap-8',
    link: 'text-gray-300 hover:text-[#00f0ff] transition-all duration-300 text-sm font-semibold uppercase tracking-widest relative after:content-[""] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#00f0ff] after:to-[#b026ff] hover:after:w-full after:transition-all after:duration-300',
    btn: 'glass-card px-8 py-3 text-sm font-semibold tracking-wider text-white hover:text-white transition-all duration-300 hidden md:block border-[#b026ff]/50 hover:border-[#00f0ff] hover:bg-[rgba(0,240,255,0.1)] hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]',
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="#home" className={styles.logo}>
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00f0ff] to-[#b026ff] flex items-center justify-center text-white text-lg mr-2 shadow-[0_0_15px_rgba(0,240,255,0.4)] group-hover:rotate-12 transition-transform duration-300">V</span>
          VENKAT<span className="text-gradient">.AI</span>
        </a>
        <div className={styles.navLinks}>
          <a href="#about" className={styles.link}>About</a>
          <a href="#skills" className={styles.link}>Skills</a>
          <a href="#projects" className={styles.link}>Projects</a>
          <a href="#experience" className={styles.link}>Experience</a>
        </div>
        <a href="#contact" className={styles.btn}>
          Contact Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
