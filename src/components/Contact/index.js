import React, { useState } from 'react';
import '../../styles/Contact.css';

function ContactForm() {
    // Here we set two state variables for firstName and lastName using `useState`
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;

        // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
        return name === 'firstName' ? setFirstName(value) : setLastName(value);
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
                            <div className="input-container">
                                <input
                                    className="nameBox"
                                    value={firstName}
                                    name="firstName"
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="First Name"
                                />
                            </div>
                            <div className="input-container">
                                <input
                                    className="nameBox"
                                    value={lastName}
                                    name="lastName"
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="email-container">
                        <p>Email</p>
                        <div className="input-container">
                            <input
                                value={email}
                                name="email"
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Email Address"
                            />
                        </div>
                    </div>
                    <div className="message-container">
                        <p>Message</p>
                        <div className="input-container">
                            <input
                                value={message}
                                name="message"
                                onChange={handleInputChange}
                                type="text"
                            />
                        </div>

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
