import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
import './Style.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null
        };
        // this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value);
        console.log(event)
    }

    submit(event) {
        event.preventDefault();
        console.log(this.state.name);
    }

    render() {
        return(
            <div className="contact-container">
                <div className="form-container">
                    <h3>Hi there, thank you for using one of my apps. You can reach me through the contact form below. Feel free to send me any feedback, report bugs, or suggestions.</h3>
                    <br/>
                    <form style={{display: "flex", flexDirection: "column"}} method="POST" action="https://formspree.io/techsonate+support@gmail.com">
                        <input required type="text" name="name" placeholder="Name" onChange={this.handleChange} />
                        <input required type="email" name="email" placeholder="Email" />
                        <input required type="text" name="_subject" placeholder="Subject (App Name)" />
                        <input type="hidden" name="_gotcha" style={{display:"none"}} />
                        <Textarea required name="message" placeholder="Your message" />
                        <br/>
                        <input type="submit" value="Submit" style={{alignSelf: "center"}}/>
                    </form>
                </div>
            </div>
        )
    }
};
export default Contact;
