// src/components/WhatsAppFab.jsx
import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import '../styles/WhatsAppFab.css';

const WhatsAppFab = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');

  const phoneNumber = '254700000000'; // Replace with your actual WhatsApp number
  const welcomeMessage = "Hi KXByte team, I'm interested in discussing a project.";

  useEffect(() => {
    // Show FAB after scrolling down 300px
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSendMessage = () => {
    const text = message || welcomeMessage;
    const encodedMessage = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  const handleQuickMessage = (preset) => {
    const encodedMessage = encodeURIComponent(preset);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    setIsOpen(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <div className={`whatsapp-fab ${isOpen ? 'open' : ''}`}>
        {/* Popup Chat Box */}
        <div className="whatsapp-popup">
          <div className="popup-header">
            <div className="popup-header-info">
              <div className="whatsapp-avatar">
                <FaWhatsapp size={20} />
              </div>
              <div>
                <h4>KXByte Team</h4>
                <p>Typically replies within an hour</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="popup-close">
              <FiX size={18} />
            </button>
          </div>

          <div className="popup-body">
            <div className="chat-message">
              <div className="message-bubble">
                Hey there! 👋 Need help with a project? Let's chat on WhatsApp.
              </div>
            </div>
            
            <div className="quick-replies">
              <button onClick={() => handleQuickMessage("Hi, I need a quote for a website. Can you help?")}>
                Website quote
              </button>
              <button onClick={() => handleQuickMessage("Hi, I want to build a mobile app. Tell me more.")}>
                Mobile app
              </button>
              <button onClick={() => handleQuickMessage("Hi, I already have a project. Need support.")}>
                Existing project
              </button>
            </div>

            <div className="custom-message">
              <input
                type="text"
                placeholder="Or type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button onClick={handleSendMessage} disabled={!message.trim()}>
                Send
              </button>
            </div>
          </div>
        </div>

        {/* FAB Button */}
        <button className="whatsapp-button" onClick={() => setIsOpen(!isOpen)}>
          <FaWhatsapp size={28} />
        </button>
      </div>
    </>
  );
};

export default WhatsAppFab;