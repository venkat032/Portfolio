import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-[rgba(255,255,255,0.05)] overflow-hidden">
      {/* Decorative backdrop */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,240,255,0.05)] to-transparent z-0 pointer-events-none" />

      {/* Animated Network Graphic SVG Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 50% 100%, #00f0ff 0%, transparent 50%), radial-gradient(circle at 100% 0%, #b026ff 0%, transparent 30%)' }}></div>
      <svg className="absolute w-full h-full inset-0 opacity-5 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <pattern id="network" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="1.5" fill="#00f0ff" />
          <path d="M 20 20 L 40 40 M 20 20 L 0 40 M 20 20 L 40 0 M 20 20 L 0 0" stroke="#b026ff" strokeWidth="0.5" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#network)" />
      </svg>

      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center justify-center text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 font-outfit text-white">
          Building intelligent systems for the future with <span className="text-gradient">Artificial Intelligence.</span>
        </h3>
        <p className="text-gray-400 mb-8 max-w-lg">
          M. Venkat Lakshmi Narayana — AI/ML Engineer
        </p>

        <div className="flex gap-6 mb-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full glass flex items-center justify-center hover:border-[#00f0ff] hover:text-[#00f0ff] transition-colors duration-300"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/venkat-lakshmi-narayana-248317280"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full glass flex items-center justify-center hover:border-[#00f0ff] hover:text-[#00f0ff] transition-colors duration-300"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:venkatvarun88@gmail.com"
            className="w-12 h-12 rounded-full glass flex items-center justify-center hover:border-[#00f0ff] hover:text-[#00f0ff] transition-colors duration-300"
          >
            <Mail size={20} />
          </a>
        </div>

        <p className="text-sm text-gray-500 font-medium">
          © {new Date().getFullYear()} M. Venkat Lakshmi Narayana. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
