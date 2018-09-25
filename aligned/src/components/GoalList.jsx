import React, { Component } from 'react';
import Goal from './Goal';

class GoalList extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.addGoal}>Click me</button>
                <ul>
                {
                    this.props.goals.map(goal => (
                        <Goal 
                            key={goal.id} 
                            id={goal.id} 
                            removeGoal={this.props.removeGoal}
                            selectGoal={ () => this.props.selectGoal(goal) }
                            />
                    ))
                }
                </ul>
            </div>
        );
    }
}

export default GoalList;