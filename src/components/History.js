import React, { Component } from 'react';
import HistoryItem from './HistoryItem';

class History extends Component{
    render(){
        return(
            <div>
                <h2>History</h2>
                {
                    this.props.history.map(
                        (record, i) =>
                        <HistoryItem {...this.props} key={i} record={record} />
                    )
                }
            </div>
        );
    }
}

export default History;