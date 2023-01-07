import React from 'react'
import "./intro.css"
import Cvimg from "../../img/pic2.png"

const Intro = () => {
    return (
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hello, My name is</h2>
            <h1 className="i-name">Shahmeer Khan</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Software Engineer</div>
                <div className="i-title-item">Web Developer</div>
                <div className="i-title-item">MERN Developer</div>
                <div className="i-title-item">ReactJs Developer</div>
              </div>
            </div>
            <p className="i-desc">
              I have done BS-Software Engineering from PUCIT.Basically, I can
              use any JavaScript library or its framework (like React.js and
              Node.js) at its best. </p>
          </div>
        </div>
        <div className="i-right">
          <div className="i-bg"></div>
          <img src={Cvimg} alt="" className="i-img" />
        </div>
      </div>
    );
}

export default Intro