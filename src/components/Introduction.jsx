import React from 'react'
import "../css/Introduction.css"
// import myImage from "../assets/myImage.JPEG"
import PUMA from "../assets/PUMA.jpg"

const Introduction = () => {
  return (
    <div className="intro-container">
      <div className="intro-details-container">
        <h2>Hi! I`m Francis, a Full Stack Developer</h2>
        <p>
          <i>
            I build clean, responsive, and user-friendly web applications using
            React and Node.js. I focus on writing efficient code, creating
            smooth user experiences, and following modern web standards. My goal
            is to deliver fast, scalable, and visually appealing websites that
            solve real-world problems.
          </i>
        </p>

        <button className="view-my-work-btn">View My Work</button>
      </div>
      <div className="intro-img-container">
        <img
          src={PUMA}
          alt="Personal Picture"
          className="personal-picture-img"
        />
      </div>
    </div>
  )
}

export default Introduction