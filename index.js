// Code your solution in this file
function findMatching(drivers, string) {
  const arr = drivers.filter(function(driver){return driver.toLowerCase() === string.toLowerCase()});
  return arr;
}

function fuzzyMatch(drivers, string) {
  const arr = drivers.filter(function(driver){return driver.startsWith(string)});
  return arr;
}

function matchName(drivers, string) {
  const arr = drivers.filter(function(driver){return driver.name === string});
  return arr;
}
