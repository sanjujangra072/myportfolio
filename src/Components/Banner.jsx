import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="sanju.png" alt="" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Sanjeev Jangra</h6>
            <h3>FrontEnd Developer</h3>
            <p>
              Hey, I am a FrontEnd Developer and I am a Dedicated Person in my Profession. I have Completed my Graduation in 2021.
              Presently, I am looking for a job of FrontEnd Developer.
            </p>
            <a className="btn" href="#projects">
              I Can Work On
            </a>
          </div>
        </div>
        <div className="edu-box">
          <h1>My Qualifications</h1>
          <div className="edu-section">
            <h2>BCA - Bachelor Of Computer Application in 2018 to 2021</h2>
            <h3>12th From HBSE in 2018</h3>
            <h4>10th From HBSE in 2016</h4>
          </div>
          <h1>Skills</h1>
          <div className="edu-section2">
            <h2>1 Year Computer Diploma From Hartron Skills Center Hisar in 2022</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Bootstrap</li>
              <li>Jquery</li>
              <li>ReactJs</li>
              <li>Git/Github</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;