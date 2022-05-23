// Code your solution here
function findMatching(drivers, name) {
    let riders = drivers.filter(drivers => drivers == name || drivers == name.toLowerCase())
    return riders
 
}
function fuzzyMatch(drivers, letter) {
    let riders = drivers.filter(drivers => drivers.slice(0, letter.length) === letter)
    return riders
}
function matchName(drivers, string){
    let riders = drivers.filter(drivers => drivers.name === string)
    return riders

}