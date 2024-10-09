import React from 'react';
import '../Styles/AboutUsPage.css'; // Import your custom CSS

const AboutUsPage = () => {
  return (
    <div className="about-us-container">      
      <section className="about-section">
        <div className="about-text">
          <h1>About Us</h1>
          <p>
            Welcome to Fruit.AI! Whether you're looking to discover new fruits, understand their nutritional values,
            or find the perfect fruit for your diet, our AI-driven chatbot is here to assist.
          </p>
          <h3>What Fruit.AI provides you?</h3>
          <p>
            We provide personalized fruit recommendations tailored to your health needs, making it easier for you to
            integrate the best fruits into your daily routine. Our goal is to empower you with knowledge and make 
            your health journey delightful with the right fruits.
          </p>
          <p>
            Discover a world of fruits, personalized for your lifestyle, and enjoy the benefits of nature’s finest produce.
            Let’s make your wellness journey colorful, nutritious, and delicious!
          </p>
          <h3>Why Fruit.AI?</h3>
          <ul>
            <li>Interactive Chatbot</li>
            <li>Language Translator</li>
            <li>Community Engagement</li>
          </ul>
          <h3>About our Team</h3>
          <p>
            Our team is dedicated to helping you find the best fruits and achieve your health goals.
            We are a group of fruit enthusiasts, nutritionists, and AI experts working together to bring you the best
            fruit recommendations.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;

