import React, { Component } from 'react';

class NewContact extends Component{
    constructor(){
        super();
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        console.log('form submit');
        const name = this.refs.newContactName.value;
        const phone = this.refs.newContactPhone.value;

        this.props.newContact(name, phone);
        this.refs.successMsg.style.display = "block";
        this.refs.newContactForm.reset();
    }
    render(){
        return(
            <div>
                <h2>Add Contact</h2>
                <div ref="successMsg" className="alert alert-dismissible alert-success">
                    Contact Added!
                </div>
                <form className="form-horizontal" ref="newContactForm" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="newContactName">Name</label>
                        <input className="form-control" name="newContactName" type="text" ref="newContactName" placeholder="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="newContactPhone">Phone Number</label>
                        <input className="form-control" name="newContactPhone" type="text" ref="newContactPhone" placeholder="eg. 917-000-0000" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Contact</button>
                </form>
            </div>
        );
    }
}

export default NewContact;