export const edit = (dataSet, oldData, newData) => {
    let newDataSet = dataSet
    const index = newDataSet.indexOf(oldData)
    newDataSet.splice(index, 1, newData)
    return newDataSet
}
export const del = (oldData, data) => {
    let newData = oldData
    const index = newData.indexOf(data)
    newData.splice(index, 1)
    return newData
}
export const notExisting = (data, newData) => {
    const check = (data.filter((item) => (item.name === newData.name && item.id != newData.id)).length == 0)
    return check;
}
export const deleteBooks = (data, type, name) => {
    const newData = (data.filter((item) => item[type] != name))
    return newData;
}

