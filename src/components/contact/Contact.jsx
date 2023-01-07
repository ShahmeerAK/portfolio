import React, { useContext, useRef, useState } from 'react'
import './contact.css'
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';

const Contact = () => {
   
    const formRef = useRef()
    const [done, setDone]=useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit =(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_4vn00le', "template_d2a0wtf", 
            formRef.current, 'JQeNcPMDktamEdiVH')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
    <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's Discuss Your Project</h1>
                <div className="c-info">
                    <div className="c-info-item">
                            <LocalPhoneSharpIcon /> <p>+92 317 4233544</p></div>
                    <div className="c-info-item2">
                        <EmailSharpIcon /> <p>shahmeer27ak@gmail.com</p>                    
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc"><b>What's your story?</b> Get in touch. Always available for work if the right project comes along me.</p>
             <form ref={formRef} onSubmit={handleSubmit}>
                <input style={{ backgroundColor: darkMode && "#333", color: darkMode && 'white'}} type="text" placeholder="Name" name="user_name"/>
                <input style={{ backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="text" placeholder="Subject" name="user_subject" />
                <input style={{ backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="text" placeholder="Email" name="user_email" />
                <textarea style={{ backgroundColor: darkMode && "#333", color: darkMode && "white" }} name="message" placeholder='Message' cols="10" rows="5"></textarea>
             <button>Submit</button>
             {done && " Email Successfully Sent"}
             </form>
            </div>
        </div>
    </div>
  )
}

export default Contact