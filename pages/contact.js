"use client"
import React, { useState } from "react";

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit= (event)=>{
    event.preventDefault(); 
    
    setFirstName('')
    setEmail('')
    setMessage('')
    console.log(`${firstName}`);
    console.log(`${email}`);
    console.log(`${message}`);
  }
  return (
    <div>
    <div className="container">
    Contact Me
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label> Name:</label>
          <input type="text" id="name" name="name" value={firstName} 
          onChange={event => setFirstName(event.target.value)}




          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" id="email" name="email" value={email} 
                      onChange={event => setEmail(event.target.value)}

          />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea id="message" name="message" value={message}
                    onChange={event => setMessage(event.target.value)}

          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
      
    </div>
  );
};

export default Contact;
