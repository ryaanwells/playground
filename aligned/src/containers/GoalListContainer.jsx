import { connect } from 'react-redux'
import { addGoal, removeGoal, selectGoal } from '../actions/goals';
import { open } from '../actions/sidebar';
import GoalList from '../components/GoalList';

let mapStateToProps = state => {
    return {
        goals: state.goals,
        selectedGoal: state.selectedGoal
    }
}

const selectGoalFn = dispatch => (goal) => {
    dispatch(selectGoal(goal));
    dispatch(open());
}

let mapDispatchToProps = dispatch => {
    return {
        addGoal: () => dispatch(addGoal()),
        removeGoal: (id) => dispatch(removeGoal(id)),
        selectGoal: selectGoalFn(dispatch)
    }
}

const GoalListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GoalList);

export default GoalListContainer;
