import React, { useState } from 'react';
import '../../styles/Contact.css';

function ContactForm() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleInputNameChange = (e) => {
    const { name, value } = e.target;
    name === 'firstName' ? setFirstName(value) : setLastName(value);
    (firstName === '' || lastName  === '') ? setStatus('missing information') : setStatus("");
  };

  const handleInputEmailChange = (e) => {
    const { value } = e.target;
    const testFormat = (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value));
    setEmail(value);
    !testFormat ? setStatus("your email is invalid") : setStatus("");
  };

  const handleInputMessageChange = (e) => {
    const { value } = e.target;
    setMessage(value);
    value === '' ? setStatus('missing information') : setStatus("");
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    console.log(firstName, lastName, email, message);

    // Alert the user their first and last name, clear the inputs
    //alert(`Hello ${firstName} ${lastName}`);
    //setFirstName('');
    //setLastName('');
  };

  return (
    <div className="main-container">
      <div className="inner-container">
        <div className="title-container">
          <p>Contact</p>
        </div>
        <form className="form">
          <div className="name-container">
            <p className="subtitle">name:</p>
            <div className="nameInput-container">
              <div>
                <input
                  value={firstName}
                  name="firstName"
                  onChange={handleInputNameChange}
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div>
                <input
                  value={lastName}
                  name="lastName"
                  onChange={handleInputNameChange}
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

