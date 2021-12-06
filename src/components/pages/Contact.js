import React, { useState } from 'react';
import '../../styles/Contact.css';

function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const checkForMissingInfo = (e) => {
    const { value } = e.target;
    (firstName === '' || lastName  === '' || email === '' || message === '') ? setStatus('missing information') : setStatus("");
  }

  const handleInputNameChange = (e) => {
    const { name, value } = e.target;
    name === 'firstName' ? setFirstName(value) : setLastName(value);
  };

  const handleInputEmailChange = (e) => {
    const { value } = e.target;
    const testFormat = (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value));
    setEmail(value);
    !testFormat ? setStatus("your email is invalid") : setStatus('');
  };

  const handleInputMessageChange = (e) => {
    const { value } = e.target;
    setMessage(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="main-container">
      <div className="inner-container">
        <div className="title-container">
          <p>Contact</p>
        </div>
        <p className="white">My Email: acromarti@gmail.com</p>
        <form className="form">
          <div className="name-container">
            <p className="subtitle">name:</p>
            <div className="nameInput-container">
              <div>
                <input
                  value={firstName}
                  name="firstName"
                  onChange={handleInputNameChange}
                  onClick={checkForMissingInfo}
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div>
                <input
                  value={lastName}
                  name="lastName"
                  onChange={handleInputNameChange}
                  onClick={checkForMissingInfo}
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
          </div>
          <div className="email-container">
            <p className="subtitle">email:</p>
            <div>
              <input
                value={email}
                name="email"
                onChange={handleInputEmailChange}
                onClick={checkForMissingInfo}
                type="text"
                placeholder="Email Address"
              />
            </div>
          </div>
          <div className="message-container">
            <p className="subtitle">message:</p>
            <div>
              <textarea
                value={message}
                name="message"
                onChange={handleInputMessageChange}
                onClick={checkForMissingInfo}
                type="text"
              />
            </div>
          </div>
          <div>
            <p className="status">{status}</p>
          </div>
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;

