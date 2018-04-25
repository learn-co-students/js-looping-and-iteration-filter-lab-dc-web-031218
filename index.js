function findMatching (drivers, string) {
  // console.log('drivers:', drivers, 'string:', string);
  let drive = drivers.filter(name => name.toUpperCase() == string.toUpperCase());
  return drive;
}

function fuzzyMatch(drivers, string) {
  let leng = string.length;
  let drive = drivers.filter(name => name.slice(0,leng) == string);
  return drive;
}

function matchName(drivers, string) {
  // let driver = drivers.filter(driver => console.log(driver));
  return drivers.filter(function(driver) {
    // console.log(Object.values(driver)[0]);
    return Object.values(driver)[0] == string;
  }); 
  // console.log(drivers)
  // return driver;
}
