import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="about-container">
        <div className="contact-left">

        </div>
        <div className="contact-right">
            <h1>At Your Service</h1>
            <p>Tell me a little about your event so I can begin the <br /> creation process.</p>
            <form>
                <div className="input-group">
                    <input type="text" placeholder="Full Name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="text" placeholder="Phone" required />
                    <input type="text" placeholder="Address of the Event" required />
                    <input type="text" placeholder="Date of the Event" required />
                    <input className="time-input" type="text" placeholder="Time of the Event" required />
                    <input type="text" placeholder="Number of Guests At Event" required />
                    <select name="menu" required>
                        <option value="" disabled selected hidden>The Menu You Would Like</option>
                        <option>The International Menu</option>
                        <option>The French Menu</option>
                        <option>The Italian Menu</option>
                        <option>El Mexican Menu</option>
                        <option>South of the West Menu</option>
                        <option>Roast Beef Menu</option>
                    </select>
                    <input type="text" placeholder="Have a Question?" />
                </div>
                <div className="btn-icon-container">
                <button className="contact-btn" type="submit">Submit</button>
                    <div className="contact-icons">
                        <a href="" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                        <a href="" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
                        <a href="" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact;