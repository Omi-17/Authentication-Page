import * as Actions from '../Store/Actions';
import axios from 'axios';

const initialState = {
    show: "LOGIN"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SWITCH":
            let temp = state.show
            if (temp === "LOGIN")
                temp = "SIGN UP"
            else
                temp = "LOGIN"
            return {
                ...state,
                show: temp
            }
        case "AUTHENTICATION":
            const data = {
                ...action.data,
                returnSecureToken: true
            }
            let url = "";
            if(state.show === "LOGIN")
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA53As-3pNvL6VL9Gd-GexULh6OSNU5Fks"
            else
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA53As-3pNvL6VL9Gd-GexULh6OSNU5Fks"
            alert("Authentication Successful")
            axios.post(url, data).then(res => console.log(res.data)).catch(err => console.log(err))
        default:
            return state
    }
}

export default reducer;