
export const dataReducer = (state = [], action) => {
    switch (action.type) {
        case 'fetch': 
            return action.payload;
        default:
            return state;
    }
}

export const changePaciente = (state = {}, action) => {
    switch (action.type) {
        case 'change': 
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            };
        case 'click':
            return action.payload;
        default:
            return state;
    }
}