import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const navLinks = [
    { label: 'About', href: '/#about' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Projects', href: '/projects' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Contact', href: '/#contact' },
  ];

  const socials = [
    {
      icon: <Github size={18} />,
      href: 'https://github.com/venkat032',
      label: 'GitHub',
    },
    {
      icon: <Linkedin size={18} />,
      href: 'https://linkedin.com/in/venkat-lakshmi-narayana-248317280',
      label: 'LinkedIn',
    },
    {
      icon: <Mail size={18} />,
      href: 'mailto:venkatvarun88@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="relative border-t border-[rgba(255,255,255,0.06)] overflow-hidden bg-[#030305]">

      {/* Subtle ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-[#00f0ff] rounded-full mix-blend-screen filter blur-[140px] opacity-[0.04]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-[#b026ff] rounded-full mix-blend-screen filter blur-[140px] opacity-[0.04]" />
      </div>

      {/* ── Main Footer Body ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-10 lg:px-24 pt-36 pb-24">

        {/* Top row: Brand (left) | Nav + Connect side-by-side (right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 mb-16 pb-6 items-start">

          {/* Brand Column */}
          <div className="flex flex-col gap-7 max-w-sm">
            <Link to="/" className="inline-flex items-center gap-2 w-fit group">
              <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00f0ff] to-[#b026ff] flex items-center justify-center text-white text-base font-black shadow-[0_0_15px_rgba(0,240,255,0.3)] group-hover:rotate-12 transition-transform duration-300">
                V
              </span>
              <span className="text-xl font-black tracking-widest font-outfit text-white uppercase">
                VENKAT<span className="text-gradient">.AI</span>
              </span>
            </Link>

            <p className="text-gray-400 text-sm leading-[1.9]">
              AI Engineer specializing in building intelligent systems using LLMs, machine learning, and automation — from RAG pipelines to full-stack AI applications.
            </p><br />


            <p className="text-gray-500 text-sm leading-relaxed">
              📍 India &nbsp;·&nbsp; Open to Remote &amp; Hybrid Roles
            </p>
          </div>

          {/* Navigation + Connect side-by-side */}
          <div className="grid grid-cols-2 gap-12">

            {/* Navigation Links */}
            <div className="flex flex-col gap-5">
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 pb-3 border-b border-white/[0.05]">
                Navigation
              </h4>
              {navLinks.map((link) =>
                link.href.startsWith('/') && !link.href.startsWith('/#') ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-gray-400 text-sm hover:text-[#00f0ff] transition-colors duration-200 w-fit"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#00f0ff] transition-colors duration-200 w-fit"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>

            {/* Connect / Socials */}
            <div className="flex flex-col gap-5">
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 pb-3 border-b border-white/[0.05]">
                Connect
              </h4>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 text-sm hover:text-[#00f0ff] transition-colors duration-200 group w-fit"
                >
                  <span className="text-gray-500 group-hover:text-[#00f0ff] transition-colors duration-200">
                    {s.icon}
                  </span>
                  {s.label}
                </a>
              ))}
              <a
                href="mailto:venkatvarun88@gmail.com"
                className="mt-3 inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#00f0ff] border border-[#00f0ff]/30 px-5 py-2.5 rounded-full hover:bg-[rgba(0,240,255,0.1)] transition-all duration-200 w-fit"
              >
                Hire Me <ExternalLink size={12} />
              </a>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[rgba(255,255,255,0.06)] pt-12 mt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

            {/* Tagline */}
            <p className="text-gray-500 text-sm leading-relaxed tracking-wide">
              Building intelligent systems for the future with{' '}
              <span className="text-gradient font-semibold">Artificial Intelligence.</span>
            </p>

            {/* Copyright */}
            <p className="text-gray-600 text-xs font-medium whitespace-nowrap tracking-wider">
              © {new Date().getFullYear()} M. Venkat Lakshmi Narayana. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
