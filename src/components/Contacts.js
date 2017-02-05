import React, { Component } from 'react';
import ContactItem from './ContactItem';
import { Link } from 'react-router';


class Contacts extends Component{
    render(){
        return(
            <div>
                <h2>Contacts</h2>
                <Link className="btn btn-primary btn-lg btn-block" to='/new-contact'>New Contact</Link>
                {
                    this.props.contacts.map(
                        (contact, i) =>
                        <ContactItem {...this.props} key={i} contact={contact} />
                    )
                }
                
            </div>
        );
    }
}

export default Contacts;