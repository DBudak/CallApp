import React, { Component } from 'react';
import '../styles/Main.css';
import { Link } from 'react-router';

class ContactItem extends Component{
    render(){
        return(
            <div className="item row">
                <div className="col-sm-8">
                    <strong>{this.props.contact.name}</strong><br/>
                    {this.props.contact.phone}
                </div>
                <div className="col-sm-4 text-right">
                    <button className="call-btn"
                    onClick={this.props.call.bind(null,this.props.contact.name,this.props.contact.phone)}>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    </button>
                    <Link className="message-btn" to={`/new-message/${this.props.contact.name}`}>
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                    </Link>
                </div>
            </div>
        );
    }
}

export default ContactItem;