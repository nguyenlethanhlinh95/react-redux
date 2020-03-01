//khai bao reducer edit status
const editStatusReducersInitialState = false;
const editStatusReducer = (state = editStatusReducersInitialState, action) => {
    switch (action.type) {
        case "CHANGE_STATUS":
            return !state;
        default:
            return state
    }
}

export default editStatusReducer;