import React, { useRef } from "react";
import './Contact.css';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'; 

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_pjgk3n3', 'template_77s6bw5', form.current, {
                publicKey: 'glx5GXG-GM7hQYY0_',   
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    e.target.reset();
                    
                  
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your message has been sent successfully.',
                        icon: 'success',
                        confirmButtonColor: '#FFD700', 
                        background: '#1a1a1a', 
                        color: '#fff'
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    
                    
                    Swal.fire({
                        title: 'Error!',
                        text: 'Something went wrong. Please try again later.',
                        icon: 'error',
                        confirmButtonColor: '#FF7E5F',
                        background: '#1a1a1a',
                        color: '#fff'
                    });
                }
            );
    };

    return (
        <section id="contactPage">
            <h1 className="contactTitle">Get In Touch</h1>
            <form ref={form} className="contactForm" onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Your Name" name="your_name" required />
                <input type="email" className="email" placeholder="Your Email" name="your_email" required />
                <textarea className="msg" name="message" rows="5" placeholder="Message" required></textarea>
                <button type="submit" value="send" className="submitBtn">Submit</button>
            </form>
        </section>
    );
}

export default Contact;