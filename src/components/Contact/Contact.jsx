import React, {useRef} from "react";
import './Contact.css';
import emailjs from '@emailjs/browser';


const Contact = () =>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_pjgk3n3', 'template_77s6bw5', form.current, {
            publicKey: 'w3OtjNlx0B_8PdHZZ',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email sent!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    return(
        <section id="contactPage">
            <h1 className="contactTitle">Get In Touch</h1>
            <form ref={form} className="contactForm" onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Your Name" name="your_name" />
                <input type="email" className="email" placeholder="Your Email" name="your_email" />
                <textarea className="msg" name="message" rows="5" placeholder="Message"></textarea>
                <button type="submit" value="send" className="submitBtn">Submit</button>
            </form>
        </section>
    );
}

export default Contact