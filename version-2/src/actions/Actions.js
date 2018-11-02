import * as ActionType from './actionTypes'
export const addData = (dataType, oldData, data) => {
    let type;
    switch (dataType) {
        case 'books':
            type = ActionType.ADD_BOOK
            break;
        case 'authors':
            type = ActionType.ADD_AUTHOR
            break;
        case 'publishers':
            type = ActionType.ADD_PUBLISHER
            break;
    }
    const newData = [...oldData, data]
    return {
        type,
        payload: newData
    };
}
export const editDetails = (dataType, oldData, oldBook, data) => {
    let type;
    switch (dataType) {
        case 'books':
            type = ActionType.ADD_BOOK
            break;
        case 'authors':
            type = ActionType.ADD_AUTHOR
            break;
        case 'publishers':
            type = ActionType.ADD_PUBLISHER
            break;
    }
    let newData = oldData
    const index = newData.indexOf(oldBook)
    newData.splice(index, 1, data)
    return {
        type,
        payload: newData
    };
}

export const deleteData = (dataType, oldData, data) => {
    let type;
    switch (dataType) {
        case 'books':
            type = ActionType.ADD_BOOK
            break;
        case 'authors':
            type = ActionType.ADD_AUTHOR
            break;
        case 'publishers':
            type = ActionType.ADD_PUBLISHER
            break;
    }
    let newData = oldData
    const index = newData.indexOf(data)
    newData.splice(index, 1)
    return {
        type: ActionType.DELETE_AUTHOR,
        payload: newData

    };
}