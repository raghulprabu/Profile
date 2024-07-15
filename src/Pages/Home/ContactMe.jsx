import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactMe = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_i28wqhu'; // Replace with your EmailJS service ID
    const templateId = 'template_9vv1y0m'; // Replace with your EmailJS template ID
    const publicKey = 'BbuHzWDbN4HAbGH7U'; // Replace with your EmailJS user ID

    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      from_email: email,
      to_name: 'Web Wizard',
      message: message,
      phone_number: phoneNumber,
      topic: topic
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        // Reset form fields after successful submission
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhoneNumber('');
        setTopic('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Send details</p>
        <h1>Contact Me</h1>
        <p className="text-lg">
          How can u communicate me....
        </p>
      </div>
      <form onSubmit={handleSubmit} className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="from_name"
              id="first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last_name"
              id="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="from_email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="tel"
              className="contact--input text-md"
              name="phone_number"
              id="phone-number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </label>
        </div>
        <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select
            id="choose-topic"
            className="contact--input text-md"
            name="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
          >
            <option value="">Select One...</option>
            <option value="Recruitment">Recruitment</option>
            <option value="Personal">Personal</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            required
          />
        </label>
        <div>
          <button type="submit" className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default ContactMe;
