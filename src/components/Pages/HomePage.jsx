import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCommentDots, FaInfoCircle, FaQuestionCircle  } from 'react-icons/fa'; 
import '../Styles/HomePage.css';
const HomePage = () => {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate('/about-us');
  };

  const handleTranslateClick = () => {
    navigate('/translate');
  };

  const handleFaqClick = () => {
    navigate('/faq');
  };

  const handleChatClick = () => {
    navigate('/chat');
  };

  return (
    <div className="home-container">
      <div className="header">
        <h1 className="animate__animated animate__fadeInDown">Fruit.AI</h1>
        <p className="animate__animated animate__fadeIn animate__delay-1s">Pick Your Best</p>
      </div>

      <div className="buttons-container">
        {/* Chat button with FaCommentDots icon */}
        <div className="button animate__animated animate__zoomIn"
        onClick={handleChatClick}>
          <FaCommentDots size={30} color="#02E1FF" />
          <span>Chat</span>
        </div>

        {/* Translate button with image */}
        <div className="button animate__animated animate__zoomIn animate__delay-1s" onClick={handleTranslateClick}>
          <img src ="https://upload.wikimedia.org/wikipedia/commons/d/d7/Google_Translate_logo.svg" alt="Translate" />
          <span>Translate</span>
        </div>

        {/* FAQs button with FaQuestionCircle icon */}
        <div className="button animate__animated animate__zoomIn animate__delay-2s" onClick={handleFaqClick}>
          <FaQuestionCircle size={30} color="#02E1FF" />
          <span>FAQs</span>
        </div>

        {/* About button with FaInfoCircle icon */}
        <div className="button animate__animated animate__zoomIn animate__delay-3s" onClick={handleAboutClick}>
          <FaInfoCircle size={30} color="#02E1FF" />
          <span>About</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
