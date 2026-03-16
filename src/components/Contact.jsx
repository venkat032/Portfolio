import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail as MailIcon } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate send
    setTimeout(() => {
      setIsSubmitting(false);
      e.target.reset();
      alert("Message sent successfully!");
    }, 1500);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-[#0a0a0f] to-[#010103]">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black font-outfit mb-4 tracking-tight">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#00f0ff] to-[#b026ff] mx-auto rounded-full mb-10"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col gap-8"
          >
            <div className="glass-card p-10 md:p-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 border-[rgba(255,255,255,0.05)] hover:border-[#00f0ff]/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] transition-all bg-[rgba(15,15,20,0.4)] hover:bg-[rgba(20,20,25,0.6)]">
              <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-[#00f0ff]">
                <MailIcon size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2 font-outfit">Email</h4>
                <a href="mailto:venkatvarun88@gmail.com" className="text-gray-300 hover:text-[#00f0ff] transition-colors text-lg">
                  venkatvarun88@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-card p-10 md:p-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 border-[rgba(255,255,255,0.05)] hover:border-[#b026ff]/50 hover:shadow-[0_0_30px_rgba(176,38,255,0.15)] transition-all bg-[rgba(15,15,20,0.4)] hover:bg-[rgba(20,20,25,0.6)]">
              <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-[#b026ff] shrink-0">
                <MapPin size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2 font-outfit">Location</h4>
                <p className="text-gray-300 text-lg">Hyderabad, India</p>
              </div>
            </div>

            {/* Minimal glowing decorative element */}
            <div className="flex-1 min-h-[150px] relative rounded-2xl overflow-hidden glass border border-[rgba(255,255,255,0.05)] mt-4">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,240,255,0.1)] to-[rgba(176,38,255,0.1)] opacity-50"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#00f0ff] rounded-full filter blur-[60px] opacity-30 animate-pulse"></div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 lg:p-16 relative group overflow-hidden border-[#b026ff]/30 shadow-2xl bg-[rgba(15,15,20,0.4)] hover:bg-[rgba(20,20,25,0.6)]">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#b026ff] rounded-full filter blur-[120px] opacity-10 pointer-events-none group-hover:opacity-30 transition-opacity duration-700"></div>

              <div className="flex flex-col gap-6 relative z-10">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold tracking-wider text-gray-300 mb-4 uppercase">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] rounded-[20px] px-8 py-5 text-white font-medium focus:outline-none focus:border-[#00f0ff] focus:bg-[rgba(255,255,255,0.05)] transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold tracking-wider text-gray-300 mb-4 uppercase">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] rounded-[20px] px-8 py-5 text-white font-medium focus:outline-none focus:border-[#00f0ff] focus:bg-[rgba(255,255,255,0.05)] transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold tracking-wider text-gray-300 mb-4 uppercase">Message</label>
                  <textarea
                    id="message"
                    required
                    rows="5"
                    className="w-full bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] rounded-[20px] px-8 py-5 text-white font-medium focus:outline-none focus:border-[#00f0ff] focus:bg-[rgba(255,255,255,0.05)] transition-all resize-none"
                    placeholder="Hello..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 rounded-[20px] bg-gradient-to-r from-[#00f0ff] to-[#b026ff] text-white font-bold tracking-widest uppercase hover:opacity-90 hover:shadow-[0_0_20px_rgba(176,38,255,0.4)] transition-all flex items-center justify-center gap-4 disabled:opacity-70 mt-8 text-sm"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>Send Message <Send size={20} /></>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
