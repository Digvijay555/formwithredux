const initialize = [];

const saveReducer = (state=initialize, action) =>{
    switch(action.type)
    {
        case "save": 
            return [
                ...state,
                action.payload
            ]
        default:
            return state
    }

}

export default saveReducer