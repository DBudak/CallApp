import React, { Component } from 'react';

class NewMessage extends Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const phone=this.refs.messageRecepient.value;
        const name=this.props.contacts.find(contact => contact.phone === phone).name;
        const message = this.refs.messageText.value;

        this.props.text(name,phone,message);
        this.refs.successMsg.style.display = "block";
        this.refs.messageForm.reset();
    }

    render(){
        let selectedContact = null;
        if(this.props.params.name){
            selectedContact = this.props.contacts.find(contact => contact.name === this.props.params.name).phone;
        }
        return(
            <div>
                <h2>Send Message</h2>
                <div ref="successMsg" className="alert alert-dismissible alert-success">
                    Message Sent!
                </div>
                <form className="form-horizontal" onSubmit={this.handleSubmit} ref="messageForm">
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="messageRecepient">To</label>
                            <select className="form-control" ref="messageRecepient" name="messageRecepient" value={selectedContact}>
                                {this.props.contacts.map(
                                    (contact, i) =>
                                        <option value={contact.phone}>{contact.name}</option>
                                    )};
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="messageText">Message</label>
                            <textarea className="form-control" name="messageText" ref="messageText" placeholder="Your message text here" required/>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default NewMessage;