import React, { Component } from 'react';

//Routing
import { Link } from 'react-router';

class Main extends Component {
  render() {
    
    //TODO: Not the best way to switch classes.
    let buttonClass={
      contacts: 'btn-default',
      message: 'btn-default',
      history: 'btn-default'
    }
    switch(this.props.router.location.pathname){
      case '/':
        buttonClass={
          contacts: 'btn-info',
          message: 'btn-default',
          history: 'btn-default'
        }
        break;
      case '/new-message':
        buttonClass={
          contacts: 'btn-default',
          message: 'btn-info',
          history: 'btn-default'
        }
        break;
      case '/history':
        buttonClass={
          contacts: 'btn-default',
          message: 'btn-default',
          history: 'btn-info'
        }
        break;
      default:
        break;
    }
    return (
      <div  className="container">
        <h1>Call/Messenger App Demo</h1>
        <div className="btn-group btn-group-justified">
          <Link to="/" className={`btn ${buttonClass.contacts}`} >
              Contacts
          </Link>
          <Link to="/new-message" className={`btn ${buttonClass.message}`} >
              New Message
          </Link>
          <Link to="/history" className={`btn ${buttonClass.history}`}>
              History
          </Link>
        </div>
        <div>        
          {React.cloneElement(this.props.children, this.props)}
        </div>
      </div>
    );
  }
}

export default Main;