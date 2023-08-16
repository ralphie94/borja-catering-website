import React, { Component } from 'react';
import './Contact.css';
import Footer from '../components/Footer';
import axios from 'axios';

class Contact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        address: '',
        date: '',
        time: '',
        guests: '',
        menu: '',
        question: '',
        sent: false
    }   

    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handlePhone = (e) => {
        this.setState({
            phone: e.target.value
        })
    }

    handleAddress = (e) => {
        this.setState({
            address: e.target.value
        })
    }

    handleDate = (e) => {
        this.setState({
            date: e.target.value
        })
    }

    handleTime = (e) => {
        this.setState({
            time: e.target.value
        })
    }

    handleGuest = (e) => {
        this.setState({
            guests: e.target.value
        })
    }

    handleMenu = (e) => {
        this.setState({
            menu: e.target.value
        })
    }

    handleQuestion = (e) => {
        this.setState({
            question: e.target.value
        })
    }

    formSubmit = (e) => {
        e.preventDefault();

        let data = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            address: this.state.address,
            date: this.state.date,
            time: this.state.time,
            guests: this.state.guests,
            menu: this.state.menu,
            question: this.state.question
        }

        axios.post("/send", data)
        .then(res => {
            this.setState({
                sent: true
            }, this.resetForm())
        }).catch(() => {
            console.log("Message not sent");
        });
    };

    resetForm = () => {
        this.setState({
            name: '',
            email: '',
            phone: '',
            address: '',
            date: '',
            time: '',
            guests: '',
            menu: '',
            question: '',
            sent: true
        })
    };

    render() {
        const { name, email, phone, address, date, time, guests, menu, question } = this.state;

        return (
            <>
            <div className="contact-container">
                <div className="contact-left">

                </div>
                <div className="contact-right">
                    <h1>At Your Service</h1>
                    <p>Tell me a little about your event so I can begin the <br /> creation process.</p>
                    <form onSubmit={this.formSubmit}>
                        <div className="input-group">
                            <input type="text" placeholder="Full Name" name="name" value={name} onChange={this.handleName} required />
                            <input type="email" placeholder="Email" name="email" value={email} onChange={this.handleEmail} required />
                            <input type="text" placeholder="Phone" name="phone" value={phone} onChange={this.handlePhone} required />
                            <input type="text" placeholder="Address of the Event" name="address" value={address} onChange={this.handleAddress} required />
                            <input type="text" placeholder="Date of the Event" name="date" value={date} onChange={this.handleDate} required />
                            <input className="time-input" type="text" placeholder="Time of the Event" name="time" value={time} onChange={this.handleTime} required />
                            <input type="text" placeholder="Number of Guests At Event" name="guests" value={guests} onChange={this.handleGuest} required />
                            <select name="menu" value={menu} onChange={this.handleMenu} required>
                                <option value="" disabled selected hidden>The Menu You Would Like</option>
                                <option>The International Menu</option>
                                <option>The French Menu</option>
                                <option>The Italian Menu</option>
                                <option>El Mexican Menu</option>
                                <option>South of the West Menu</option>
                                <option>Roast Beef Menu</option>
                            </select>
                            <input type="text" name="question" value={question} onChange={this.handleQuestion} placeholder="Have a Question?" />
                        </div>
                        <div className="btn-icon-container">
                        <button className="contact-btn" type="submit">Submit</button>
                        <div className={this.state.sent ? "msg msgAppear" : "msg"}>Message has been sent.</div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
            </>
        )
    }
}

export default Contact;