import React, { useState, useRef, useEffect } from 'react';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [typedMessage, setTypedMessage] = useState('');
  const popupRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout>();

  const fullMessage = "  Hello! Feel free to reach out for any queries or opportunities. I'll get back to you soon.";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Typing animation effect
  useEffect(() => {
    if (showPopup) {
      setTypedMessage(''); // Reset message when modal opens
      let i = 0;

      typingTimeoutRef.current = setInterval(() => {
        if (i < fullMessage.length) {
          setTypedMessage(prev => prev + fullMessage.charAt(i));
          i++;
        } else {
          clearInterval(typingTimeoutRef.current);
        }
      }, 20); // Adjust typing speed here (lower = faster)

      return () => {
        clearInterval(typingTimeoutRef.current);
      };
    }
  }, [showPopup]);

  const togglePopup = (e: React.MouseEvent) => {
    e.preventDefault();
    if (showPopup) {
      setIsAnimatingOut(true);
      setTimeout(() => {
        setShowPopup(false);
        setIsAnimatingOut(false);
      }, 300);
    } else {
      setShowPopup(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setIsAnimatingOut(true);
        setTimeout(() => {
          setShowPopup(false);
          setIsAnimatingOut(false);
        }, 300);
      }
    };

    if (showPopup) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPopup]);

  return (
    <>
      {/* Popup */}
      <div
        ref={popupRef}
        className={`fixed bottom-24 right-6 w-80 max-w-[90%] z-[10000] shadow-lg
  ${showPopup && !isAnimatingOut ? 'animate-scale-in' : ''}
  ${isAnimatingOut ? 'animate-scale-out' : ''}
  ${!showPopup && !isAnimatingOut ? 'hidden' : ''}
`}
      >
        <div className="bg-card rounded-lg overflow-hidden border border-border">
          <div className="bg-primary text-primary-foreground flex justify-between items-center px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-lg font-semibold">
                RS
              </div>
              <div className="flex flex-col text-start">
                <span className="font-bold">Ranga Sree Vijay</span>
                <span className="text-sm text-grey-300">Chat with me</span>
              </div>
            </div>
            <button
              onClick={togglePopup}
              className="text-primary-foreground text-2xl font-bold hover:text-accent-foreground transition-colors"
            >
              ×
            </button>
          </div>

          <div className="relative p-4 bg-muted">
            <div
              className="absolute inset-0 bg-cover opacity-10"
              style={{
                backgroundImage: `url('/whatsapp-bg.png')`
              }}
            ></div>

            <div className="bg-popover text-popover-foreground p-3 rounded-lg shadow-sm text-sm relative z-10 text-start mb-5 border border-border min-h-[4rem]">
              👋 {typedMessage}
              {/* Blinking cursor */}
              {typedMessage.length < fullMessage.length && (
                <span className="ml-1 inline-block w-2 h-4 bg-primary align-middle animate-blink"></span>
              )}
            </div>
          </div>

          <div className="p-2">
            <a
              href="https://wa.me/919908351768"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-primary-foreground w-full block py-2 rounded-md text-center font-semibold flex items-center justify-center gap-2 text-sm transition-colors"
            >
              <FaTelegramPlane className="text-lg" />
              START CHAT
            </a>
          </div>
        </div>
      </div>

      {/* Rest of your component remains the same */}
      <a
        href="#"
        className="fixed bottom-6 right-6 z-[9999] rounded-full p-3 cursor-pointer flex justify-center items-center animate-pulse-glow"
        onClick={togglePopup}
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping-slow opacity-75"></div>
          {showPopup || isAnimatingOut ? (
            <button className="relative w-14 h-14 text-3xl text-white bg-primary rounded-full border-0 flex items-center justify-center">
              ×
            </button>
          ) : (
            <div className="relative w-14 h-14 bg-primary rounded-full flex items-center justify-center hover:animate-none animate-tilt">
              <span className="absolute top-0.5 right-0.5 w-3 h-3 bg-red-500 rounded-full z-[10000]"></span>
              <FaWhatsapp className="text-white text-4xl" />
            </div>
          )}
        </div>
      </a>

      <style>{`
        @keyframes tilt {
          0%, 33% { transform: rotate(0deg); }
          38% { transform: rotate(-10deg); }
          43% { transform: rotate(10deg); }
          48% { transform: rotate(-10deg); }
          53% { transform: rotate(10deg); }
          58% { transform: rotate(-10deg); }
          63% { transform: rotate(10deg); }
          68% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }

        @keyframes scale-out {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.8);
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          70%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .animate-scale-out {
          animation: scale-out 0.3s ease-out forwards;
        }

        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-tilt {
          animation: tilt 3s infinite;
        }

        .animate-blink {
          animation: blink 1s step-end infinite;
        }

        .hover\:animate-none:hover {
          animation: none;
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;