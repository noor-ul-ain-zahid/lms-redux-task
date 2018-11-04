export const edit = (oldData, oldPublisher, data) => {
    let newData = oldData
    const index = newData.indexOf(oldPublisher)
    newData.splice(index, 1, data)
    return newData
}
export const del = (oldData, data) => {
    let newData = oldData
    const index = newData.indexOf(data)
     newData.splice(index, 1)
     return newData
}
export const notExisting = (data,newData) => {
    const check =(data.filter((item) => (item.name === newData.name && item.id != newData.id)).length == 0)
    return check;
}
export const Delete=(data,type,name)=>{
    const newData =(data.filter((item) => item[type]!=name))
    return newData;
}

