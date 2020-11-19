// Code your solution here
function findMatching(drivers, string){
    let matching = drivers.filter( driver => driver.toUpperCase() == string.toUpperCase())
        return matching
}
function fuzzyMatch(drivers, string) {
    let matching = drivers.filter(driver => driver[0] == string[0])
    return matching
}

function matchName(drivers, string){
    let matching = drivers.filter( driver => driver.name == string)
    return matching
}