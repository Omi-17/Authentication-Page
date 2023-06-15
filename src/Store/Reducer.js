import * as Actions from '../Store/Actions';

const initialState = {
    show: "SIGN_IN"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SWITCH":
            let temp = state.show
            if (temp === "SIGN_IN")
                temp = "SIGN_UP"
            else
                temp = "SIGN_IN"
            return {
                ...state,
                show: temp
            }
        default:
            return state
    }
}

export default reducer;