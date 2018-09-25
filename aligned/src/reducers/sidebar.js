const initialState = {
    showSidebar: false
};

const sidebar = (state = initialState, action) => {
    switch (action.type){
        case "OPEN_SIDEBAR": 
            return {
                showSidebar: true
            };
        case "CLOSE_SIDEBAR":
            return {
                showSidebar: false
            };
        default:
            return state;
    }
}

export default sidebar;