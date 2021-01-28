
export const ListTypes = {
    FETCH: 1,
    UPDATE: 2
}

export const listReducer = (state = [], action) => {
    switch (action.type) {
        case ListTypes.FETCH:
            return action.payload;
        case ListTypes.UPDATE:
            return replaceItem(action.payload, state);
        default:
            return state;
    }
}

const replaceItem =  ({id, data, propName}, list) => {
    const index = list.findIndex( listItem => listItem[propName].toString() === id );
    if (index && index > -1)
        list[index] = data;
    return list;
}