function findMatching(drivers, string) {
    let driver = drivers.filter(d => d.toLowerCase() === string.toLowerCase());
    if (driver) {
         return driver
    }
}

function fuzzyMatch(drivers, string) {
    let driver = drivers.filter(d => d.charAt(0) === string.charAt(0));
    if (driver) {
        return driver
    }
}

function matchName(drivers, string) {
    let driver = drivers.filter(d => d.name === string);
    if (driver) {
        return driver
    }
}