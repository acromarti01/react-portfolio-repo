import React, { useState } from 'react';
//import '../../styles/Contact.css';

function ContactForm() {
    // Here we set two state variables for firstName and lastName using `useState`
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleEmailChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { value } = e.target;

        // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
        return value === '' ? setStatus(value) : setStatus(value);
    };

    const handleNameChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;
        name === 'firstName' ? setFirstName(value) : setLastName(value)
        value === '' ? setStatus() : setStatus("YES")
       

        // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
     
            
        

        
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // Alert the user their first and last name, clear the inputs
        alert(`Hello ${firstName} ${lastName}`);
        setFirstName('');
        setLastName('');
    };

    return (
        <div className="main-container">
            <div className="inner-container">
                <div className="title-container">
                    <p>Contact</p>
                </div>
                <form className="form">
                    <div className="name-container">
                        <p>Name</p>
                        <div className="nameInput-container">
                            <div>
                                <input
                                    value={firstName}
                                    name="firstName"
                                    onChange={handleNameChange}
                                    type="text"
                                    placeholder="First Name"
                                />
                            </div>
                            <div>
                                <input
                                    value={lastName}
                                    name="lastName"
                                    onChange={handleNameChange}
                                    type="text"
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="email-container">
                        <p>Email</p>
                        <div>
                            <input
                                value={email}
                                name="email"
                                onChange={handleEmailChange}
                                type="text"
                                placeholder="Email Address"
                            />
                        </div>
                    </div>
                    <div className="message-container">
                        <p>Message</p>
                        <div>
                            <input
                                value={message}
                                name="message"
                                
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="status">
                        <p>{status}</p>
                        <p>Hello {firstName} {lastName}</p>
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

