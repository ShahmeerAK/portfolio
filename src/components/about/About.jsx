import React from 'react'
import './About.css'
import Aimg from "../../img/2.jpg"
const About = () => {
  return (
    <div className='a'>
     <div className="a-left">
         <div className="a-card bg"></div>
         <div className="a-card">
             <img src={Aimg} alt="" className='a-img' />
         </div>
     </div>
     <div className="a-right">
         <h1 className='a-title'>About Me</h1>
         <p className='a-desc'>
                  Motivated web developer, can create websites through React.js, Node.js (MERN). Strong collaboration skills. HTML, CSS and JavaScript. MySQL, MS Excel, MS Word.
                  I am working new technologies as
                  well. I am very good at playing cricket and other physical sports,
                  so I am very fit, focused and consistent in my work and I can make
                  a difference with my knowledge in your Projects.
         </p>
         
     </div>
    </div>

  )
}

export default About