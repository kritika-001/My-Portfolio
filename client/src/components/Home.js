import React from 'react'
import Button from 'react-bootstrap/Button';
import "./Home.css"

const Home = () => {
  return (
    <>
      <div className="container home_container">
        <div className="home_innerdiv">
          <div className="left_div">
            <h2>Welcome to <span style={{ color: "#6c63ff" }}>Kritika Pawar</span></h2>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2 }}>I’m a recent BCA graduate specializing in AI and ML, skilled in full-stack development using the MERN stack and Python. I’ve built front-end and back-end applications, focusing on scalable and secure solutions. Proficient in JavaScript, Python, HTML, CSS, Git, and GitHub, I thrive in fast-paced, agile environments and enjoy contributing to innovative projects that make a positive impact.

            </p>
            <div className="btn_div mt-4">
            <a href='https://github.com/kritika-001' target=" _blank"><Button variant="danger" style={{ letterSpacing: "1px", border: "none", borderRadius: 4, background: "#2f2d69", marginRight: 24 }}>Github</Button></a>
            <a href='http://www.linkedin.com/in/kritika-pawar-150265199' target=" _blank"><Button variant="danger" style={{ letterSpacing: "1px", border: "none", borderRadius: 4, background: "#6c63ff" }}>LinkedIn</Button></a>
              
            </div>
          </div>
          <div className="right_div">
            <img src="../girl.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home