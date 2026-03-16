import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Minimize2 } from 'lucide-react';

// Simulated Knowledge Base
const knowledgeBase = [
  { keywords: ['who', 'venkat', 'narayana', 'about'], response: "M. Venkat Lakshmi Narayana is an AI/ML Engineer passionate about building real-world AI applications using Large Language Models, machine learning, and intelligent automation systems. He focuses on creating scalable AI products including RAG chatbots, AI agents, document intelligence systems, and workflow automation platforms." },
  { keywords: ['projects', 'work', 'built'], response: "Venkat has built several impactful projects, including a GenAI RAG Chatbot using OpenAI and FAISS, a Restaurant WhatsApp AI Agent powered by n8n that reduced manual support effort by 60%, and an AI Resume Analysis Platform utilizing NLP for semantic matching." },
  { keywords: ['technologies', 'skills', 'stack', 'specialize'], response: "He specializes in Python, GenAI (RAG, Agentic AI, Prompt Engineering), Machine Learning (Scikit-learn, Pandas), Frameworks like LangChain and Hugging Face, and Workflow Automation tools like n8n and Zapier." },
  { keywords: ['contact', 'email', 'reach', 'hire'], response: "You can contact Venkat via email at venkatvarun88@gmail.com or connect with him on LinkedIn at linkedin.com/in/venkat-lakshmi-narayana-248317280. He is based in Hyderabad, India." },
  { keywords: ['experience', 'intern', 'company'], response: "Venkat has interned as a Machine Learning Intern at Bharat Intern (improving models by 12%), an AI with Python Intern at Edvedha, and a Web Development Intern at EduNet where he built a Zomato clone backend." },
  { keywords: ['education', 'college', 'degree'], response: "He holds a B.Tech in Computer Science (AI/ML) from Sphoorthy Engineering College, Hyderabad." },
  { keywords: ['hello', 'hi', 'hey'], response: "Hello! I am Venkat's AI Assistant. How can I help you learn more about his engineering portfolio?" }
];

const getBotResponse = (input) => {
  const lowerInput = input.toLowerCase();
  for (let item of knowledgeBase) {
    if (item.keywords.some(kw => lowerInput.includes(kw))) {
      return item.response;
    }
  }
  return "I'm not sure about that specifically, but Venkat is a highly skilled AI/ML engineer specialized in Python, GenAI, and RAG architectures. Would you like to know about his projects or how to contact him?";
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi there! I am an AI assistant trained on Venkat\'s portfolio. Ask me anything about his skills, experience, or projects!' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const endOfMessagesRef = useRef(null);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const simulateStreaming = (fullText) => {
    setIsTyping(true);
    let index = 0;
    
    // Create an empty bot message first
    setMessages(prev => [...prev, { sender: 'bot', text: '' }]);

    const interval = setInterval(() => {
      setMessages(prev => {
        const newMsgs = [...prev];
        const lastMsgIndex = newMsgs.length - 1;
        newMsgs[lastMsgIndex] = { ...newMsgs[lastMsgIndex], text: fullText.substring(0, index + 1) };
        return newMsgs;
      });
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 20); // typing speed ms per char
  };

  const handleSend = (e) => {
    e?.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);

    // Simulate network delay before starting to stream
    setTimeout(() => {
      const response = getBotResponse(userMsg);
      simulateStreaming(response);
    }, 500);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50 group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-[#00f0ff] to-[#b026ff] rounded-full blur opacity-30 group-hover:opacity-75 transition duration-500 animate-pulse"></div>
            <button 
              onClick={() => setIsOpen(true)}
              className="relative w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center border border-[#b026ff]/50 text-white shadow-2xl hover:scale-110 transition-transform duration-300"
            >
              <Bot size={28} className="text-[#00f0ff]" />
              <span className="absolute top-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse"></span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] max-w-[400px] h-[600px] max-h-[85vh] flex flex-col bg-[rgba(15,15,20,0.95)] backdrop-blur-2xl border border-[rgba(0,240,255,0.2)] rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.15)] overflow-hidden"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-[rgba(255,255,255,0.05)] flex justify-between items-center bg-gradient-to-r from-[rgba(0,240,255,0.05)] to-transparent">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center border border-[#00f0ff]/30">
                  <Bot size={20} className="text-[#00f0ff]" />
                </div>
                <div>
                  <h3 className="text-white font-bold font-outfit tracking-wide text-sm">Portfolio AI <span className="px-2 py-0.5 rounded text-[10px] bg-[#b026ff]/20 text-[#b026ff] ml-2 font-mono">v4</span></h3>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <p className="text-xs text-gray-400">Online & Ready</p>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <Minimize2 size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-3 max-w-[85%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    
                    <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center border ${msg.sender === 'user' ? 'bg-gray-800 border-gray-600' : 'bg-[#00f0ff]/10 border-[#00f0ff]/30'}`}>
                      {msg.sender === 'user' ? <User size={14} className="text-gray-300" /> : <Bot size={14} className="text-[#00f0ff]" />}
                    </div>
                    
                    <div className={`rounded-2xl px-5 py-3 text-sm leading-relaxed shadow-sm ${
                      msg.sender === 'user' 
                        ? 'bg-gradient-to-br from-[#00f0ff]/20 to-[#b026ff]/20 border border-[rgba(255,255,255,0.05)] text-white rounded-tr-sm' 
                        : 'bg-gray-800/50 border border-gray-700/50 text-gray-200 rounded-tl-sm'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && messages[messages.length - 1]?.sender !== 'bot' && (
                <div className="flex justify-start">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center">
                      <Bot size={14} className="text-[#00f0ff]" />
                    </div>
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl rounded-tl-sm px-5 py-4 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-[#00f0ff] rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-[#00f0ff] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                      <span className="w-1.5 h-1.5 bg-[#00f0ff] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={endOfMessagesRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-[rgba(255,255,255,0.05)] bg-[#0a0a0f]">
              <form onSubmit={handleSend} className="relative flex items-center">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={isTyping ? "AI is typing..." : "Ask about Venkat..."}
                  disabled={isTyping}
                  className="w-full bg-[#151520] border border-gray-700 text-white text-sm rounded-full pl-5 pr-14 py-3.5 focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff]/50 transition-all disabled:opacity-50"
                />
                <button 
                  type="submit" 
                  disabled={!input.trim() || isTyping}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-[#00f0ff]/20 text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black disabled:opacity-50 disabled:hover:bg-[#00f0ff]/20 disabled:hover:text-[#00f0ff] transition-colors"
                >
                  <Send size={16} className="ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
