import React, { Component } from 'react';

class Goal extends Component {
    render () {
        return (
            <li onClick={() => this.props.selectGoal()}>This is done {this.props.id}</li>
        )
    }
}

export default Goal;