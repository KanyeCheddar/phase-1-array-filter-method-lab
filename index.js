function findMatching(drivers, string) {
    const newArray = drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
    return newArray
}

function fuzzyMatch(drivers, string) {


    const newArray = drivers.filter(driver => driver.substring(1,3) === string.substring(1,3));
    return newArray;
}