import * as ActionType from './actionTypes'
export const addBook = (oldData, data) => {
    const newData = [...oldData, data]
    return {
        type: ActionType.ADD_BOOK,
        payload: newData

    };
}
export const addAuthor = (oldData, data) => {
    const newData = [...oldData, data]
    return {
        type: ActionType.ADD_AUTHOR,
        payload: newData

    };
}
export const addPublisher = (oldData, data) => {
    const newData = [...oldData, data]
    return {
        type: ActionType.ADD_PUBLISHER,
        payload: newData
    };
}
export const editBookDetails = (oldData, oldBook, data) => {
    let newData = oldData
    const index = newData.indexOf(oldBook)
    newData.splice(index, 1, data)
    return {
        type: ActionType.EDIT_BOOK_DETAILS,
        payload: newData
    };
}
export const editAuthorDetails = (oldData, oldAuthor, data) => {
    let newData = oldData
    const index = newData.indexOf(oldAuthor)
    newData.splice(index, 1, data)
    return {
        type: ActionType.EDIT_AUTHOR_DETAILS,
        payload: newData
    };
}
export const editPublisherDetails = (oldData, oldPublisher, data) => {
    let newData = oldData
    const index = newData.indexOf(oldPublisher)
    newData.splice(index, 1, data)
    return {
        type: ActionType.EDIT_PUBLISHER_DETAILS,
        payload: newData

    };
}
export const deleteBook = (oldData, data) => {
    let newData = oldData
    const index = newData.indexOf(data)
    newData.splice(index, 1)
    return {
        type: ActionType.DELETE_BOOK,
        payload: newData

    };
}
export const deleteAuthor = (oldData, data) => {
    let newData = oldData
    const index = newData.indexOf(data)
    newData.splice(index, 1)
    return {
        type: ActionType.DELETE_AUTHOR,
        payload: newData

    };
}
export const deletePublisher = (oldData, data) => {
    let newData = oldData
    const index = newData.indexOf(data)
    newData.splice(index, 1)
    return {
        type: ActionType.DELETE_PUBLISHER,
        payload: newData

    };
}
