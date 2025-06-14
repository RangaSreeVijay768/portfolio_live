
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, Code, Terminal } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Full Stack Developer',
    'MERN Stack Expert',
    'Mobile App Developer',
    'Problem Solver'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="gradient-text">Ranga Sree Vijay</span>
          </h1>
          
          <div className="text-xl md:text-2xl mb-8 h-8">
            <span className="text-gray-300">I'm a </span>
            <span className="gradient-text font-semibold typing-animation">
              {roles[currentRole]}
            </span>
          </div>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-slide-in-left">
            Passionate Software Developer with expertise in MERN stack, mobile development, 
            and modern web technologies. I love creating innovative solutions and bringing ideas to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 animate-slide-in-right">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:scale-105 transition-all duration-300 animate-pulse-glow flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
            
            <button className="px-8 py-4 glass-card text-white rounded-lg hover:scale-105 hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
              <Mail size={20} />
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6 animate-scale-in">
            <a
              href="https://github.com/rangasreevijay768"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover:scale-110 hover:bg-white/20 transition-all duration-300 group"
            >
              <Github size={24} className="group-hover:text-blue-400" />
            </a>
            
            <a
              href="https://www.linkedin.com/in/ranga-sree-vijay-393b9a24b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover:scale-110 hover:bg-white/20 transition-all duration-300 group"
            >
              <Linkedin size={24} className="group-hover:text-blue-400" />
            </a>
            
            <a
              href="mailto:ranga.sreevijay768@gmail.com"
              className="p-3 glass-card rounded-full hover:scale-110 hover:bg-white/20 transition-all duration-300 group"
            >
              <Mail size={24} className="group-hover:text-blue-400" />
            </a>
          </div>
        </div>

        {/* Floating Code Elements */}
        <div className="absolute top-20 left-20 animate-float opacity-20">
          <Code size={40} />
        </div>
        <div className="absolute bottom-20 right-20 animate-float opacity-20" style={{ animationDelay: '1s' }}>
          <Terminal size={40} />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
