
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import WhatsAppButton from './whatsapp_icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      url: 'https://github.com/rangasreevijay768',
      name: 'GitHub'
    },
    {
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/ranga-sree-vijay-393b9a24b/',
      name: 'LinkedIn'
    },
    {
      icon: Mail,
      url: 'mailto:ranga.sreevijay768@gmail.com',
      name: 'Email'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Ranga Sree Vijay
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Full Stack Developer passionate about creating innovative solutions
              and building exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass-card rounded-full hover:scale-110 hover:bg-white/20 transition-all duration-300 group"
                  title={social.name}
                >
                  <social.icon size={20} className="group-hover:text-blue-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h4 className="text-lg font-semibold text-white mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <div className="text-gray-400">
                <strong className="text-white">Email:</strong><br />
                ranga.sreevijay768@gmail.com
              </div>
              <div className="text-gray-400">
                <strong className="text-white">Phone:</strong><br />
                +91 9908351768
              </div>
              <div className="text-gray-400">
                <strong className="text-white">Location:</strong><br />
                Hyderabad, Telangana, India
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex justify-center items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} Ranga Sree Vijay. All rights reserved.
            </div>
          </div>
        </div>

        <WhatsAppButton />

        {/* Back to Top Button */}
        {/* <div className="fixed bottom-8 right-8 z-40">
          <a
            href="#home"
            className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300 animate-bounce"
            title="Back to Top"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
