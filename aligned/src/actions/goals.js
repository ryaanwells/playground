let nextID = 0;

export const addGoal = () => {
    return {
        type: "ADD_GOAL",
        id: nextID++
    }
}

export const removeGoal = (id) => {
    return {
        type: "REMOVE_GOAL",
        id
    }
}

export const selectGoal = (goal) => {
    return {
        type: "SELECT_GOAL",
        goal
    }
}

export const deselectGoal = () => {
    return {
        type: "DESELECT_GOAL"
    }
}