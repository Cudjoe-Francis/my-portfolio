import "@fortawesome/fontawesome-free/css/all.min.css";
import "../css/SocialIcons.css"
import React from "react";

const SocialIcons = () => {
  return (
    <div className="social-container">
      <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="icon facebook">
        <div className="tooltip">Facebook</div>
        <span><i className="fab fa-facebook-f"></i></span>
      </a>

      <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="icon twitter">
        <div className="tooltip">Twitter</div>
        <span><i className="fab fa-twitter"></i></span>
      </a>

      <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="icon instagram">
        <div className="tooltip">Instagram</div>
        <span><i className="fab fa-instagram"></i></span>
      </a>

      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="icon github">
        <div className="tooltip">GitHub</div>
        <span><i className="fab fa-github"></i></span>
      </a>

      <a href="https://youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer" className="icon youtube">
        <div className="tooltip">YouTube</div>
        <span><i className="fab fa-youtube"></i></span>
      </a>
    </div>
  );
};

export default SocialIcons;
