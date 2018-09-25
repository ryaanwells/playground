const goals = (state = [], action) => {
    switch (action.type) {
        case "ADD_GOAL":
            return [
                ...state,
                {
                    id: action.id
                }
            ]
        case "REMOVE_GOAL":
            return state.filter(goal => goal.id !== action.id);
        default:
            return state;
    }
}

export default goals;