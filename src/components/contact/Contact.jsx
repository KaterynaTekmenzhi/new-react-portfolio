import React from 'react'
import { useState, useRef } from 'react'
import emailjs from 'emailjs-com';
import "./contact.scss"

export default function Contact() {

  const [message, setMessage] = useState(false)
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage(true)
    emailjs.sendForm('gmail', 'portfolio', form.current, 'mIKUjZL7noPvQNYoy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.reset();
  }


  return (
    <div className="contact" id="contact">
      <div className="left"></div>
      <div className="right">
        <h2>Contact</h2>
        <form ref={form} onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="email" placeholder="Email" />
          <input type="text" name="subject" placeholder="Subject" />
          <textarea name="message" placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <p>Message sent!</p>}
        </form>
      </div>
    </div>
  )
}
