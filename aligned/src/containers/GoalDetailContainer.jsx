import { connect } from 'react-redux'
import { addGoal, removeGoal, selectGoal } from '../actions/goals';
import { open } from '../actions/sidebar';
import GoalDetail from '../components/GoalDetail';

let mapStateToProps = state => {
    return {
        goal: state.selectedGoal
    }
}


let mapDispatchToProps = dispatch => {
    return {

    }
}

const GoalDetailContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GoalDetail);

export default GoalDetailContainer;