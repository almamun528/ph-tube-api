//? time Function

function getTime(time){
    const hour = parseInt(time / 3600)
    let remainingSecond = time % 3600
    const minute = parseInt(remainingSecond / 60)
    remainingSecond = remainingSecond % 60
    if(hour > 24){
        let day = parseInt(hour/24)
       return ` ${day} days  ${hour} hour ${minute} minute ${remainingSecond} second ago`
    }
    return `${hour} hour ${minute} minute ${remainingSecond} second ago`
}