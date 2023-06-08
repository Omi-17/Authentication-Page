
const initialState = {
    show: "SignIn"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SignIn":
            return {
                ...state,
                show: "SignUp"
            }
        case "SignUp":
            return {
                ...state,
                show: "SignIn"
            }
        default:
            return {
                ...state,
                show: !state.show
            }
    }
}

export default reducer;