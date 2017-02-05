import React, { Component } from 'react';
import '../styles/Main.css';

class HistoryItem extends Component{
    render(){
        let badge = null;
        if(this.props.record.type === 'PHONE_CALL'){
           badge = <div className="call-btn disabled"><i className="fa fa-phone" aria-hidden="true"></i></div>;                 
        }else if(this.props.record.type === 'TEXT_MESSAGE'){
            badge = <div className="message-btn disabled"><i className="fa fa-envelope" aria-hidden="true"></i></div>;
        }
        return(
            <div className="item row">
                <div className="col-sm-1">{badge}</div>
                <div className="col-sm-11">
                    <strong>{this.props.record.name}</strong><br/>
                    {this.props.record.phone}<br/>
                    <i>{this.props.record.text}</i>
                </div>
            </div>
        );
    }
}

export default HistoryItem;