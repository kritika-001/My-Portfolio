import React from 'react'
import "./About.css"

const About = () => {
  return (
    <div>
      <div className="container mb-3 about_container" style={{ minHeight: "100%" }}>
        <div className="container main_container d-flex justify-content-around flex-wrap">
          <div className="left_container mt-5" style={{ width: 500 }}>
            <h2>Hyy I'm Kritika Pawar</h2>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2, lineHeight: 2 }}>I’m a recent BCA graduate specializing in AI and ML, skilled in full-stack development using the MERN stack and Python. I’ve built front-end and back-end applications, focusing on scalable and secure solutions. Proficient in JavaScript, Python, HTML, CSS, Git, and GitHub, I thrive in fast-paced, agile environments and enjoy contributing to innovative projects that make a positive impact.</p>
          </div>
          <div className="right_container mt-3">
            <img src="../girl.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About