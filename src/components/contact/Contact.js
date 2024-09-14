import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import Avatar from "../../assets/3.png";
import LightAvater from "../../assets/2.png";

import SpinningFlower from '../about/SpiningFlower';

const Contact = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      return alert('Please complete the form above');
    }

    setLoading(true);

    const data = {
      name,
      email,
      subject,
      message,
    };

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name, // Giả sử bạn có các biến name, email, subject, message
          email: email,
          subject: subject,
          message: message,
        }),
      });
      if (!response.ok) {
        throw new Error('Error sending email');
      }
  
      alert('Email sent successfully');
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending email');
    }
  };

  return (
    <section className="contact container section" id="contact">
       
       <div className='section__name'>
                <SpinningFlower />
                <h2 className="section__title">Get In Touch</h2>
            </div>

      <div className="contact__container ">
        <div className="contact__desc">
        <div className="contact__info">

          <img className="contact__avatar" src={props.theme === 'light' ? LightAvater : Avatar} alt="logo" />
          </div>
          <div className="contact__info">
            <ul className="contact__details">
              <p>CONTACT DETAILS</p>
              <li className='email'><a>happqq2003@gmail.com</a></li>
              <li className='phone'><a>0369742606</a></li>
            </ul>
          </div>
          
          <div className="contact__info">
            <ul className="SOCIALS">
              <p>SOCIALS</p>
              <li className='email'><a  >Instagram</a></li>
              <li className='phone'><a>Facebook</a></li>
            </ul>
            </div>
        </div>

        <form onSubmit={submitHandler} className="contact__form">
  <div className="contact__form-group">
    <div className="contact__form-div">
      <label htmlFor="name" className="contact__form-label">Name</label>
      <input
        type="text"
        id="name" // Added ID for label association
        className="contact__form-input"
        placeholder="Insert your name"
        onChange={(e) => setName(e.target.value)}
      />
    </div>

    <div className="contact__form-div">
      <label htmlFor="email" className="contact__form-label">Email</label>
      <input
        type="email"
        id="email" // Added ID for label association
        className="contact__form-input"
        placeholder="Insert your email"
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  </div>

  <div className="contact__form-div">
    <label htmlFor="subject" className="contact__form-label">Subject</label>
    <input
      type="text"
      id="subject" // Added ID for label association
      className="contact__form-input"
      placeholder="Insert your subject"
      onChange={(e) => setSubject(e.target.value)}
    />
  </div>

  <div className="contact__form-div contact__form-area">
    <label htmlFor="message" className="contact__form-label">Message</label>
    <textarea
      id="message" // Added ID for label association
      cols="30"
      rows="10"
      className="contact__form-input"
      placeholder="Write your message"
      onChange={(e) => setMessage(e.target.value)}
    ></textarea>
  </div>

  <button type="submit" className="btn">
    {loading ? "Sending..." : "Send Message"}
  </button>
</form>

      </div>
    </section>
  );
};

export default Contact;
