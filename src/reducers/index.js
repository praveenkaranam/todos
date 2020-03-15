const initState = {
    userName: null
}


const userReducer = (state = initState, action) => {

    if (action.type === 'UPDATE_USER_NAME') {
        state = { ...state, ...action.data }
        return state;
    }
    return state;
}
export default userReducer;