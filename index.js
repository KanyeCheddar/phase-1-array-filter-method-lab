function findMatching(drivers, string) {
    const newArray = drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
    return newArray
}

function fuzzyMatch(drivers, string) {
    const newArray = drivers.filter(driver => driver.startsWith(string));
    return newArray;
}

function matchName(drivers, string) {
    const newArray = drivers.filter(drivers => (drivers.name === string));
    return newArray;
}

