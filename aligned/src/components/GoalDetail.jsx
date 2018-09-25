import React, { Component } from 'react';

class GoalDetail extends Component {
    
    render() {
        return (
            <div>{this.props.goal.id}</div>
        );
    }
    
}

export default GoalDetail;