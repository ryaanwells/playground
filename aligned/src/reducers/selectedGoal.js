const selectedGoal = (state = {}, action) => {
    switch (action.type) {
        case "SELECT_GOAL": 
            return action.goal;
        case "DESELECT_GOAL": 
            return {};
        default: 
            return state;
    }
}

export default selectedGoal;