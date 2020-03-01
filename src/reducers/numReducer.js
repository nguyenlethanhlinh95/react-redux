// khai bao reducer number
const numInitialState = ["Man hinh", "Chuot", "Ban phim"];
const numReducer = (state = numInitialState, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.newItem];
        case "DELETE":
            return [state.num.filter((value, i) => i !== action.number)];
        default:
            return state
    }
}

export default numReducer;