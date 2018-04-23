// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function(name) {return name.toLowerCase() === string.toLowerCase()});
}

const drivers = []
function fuzzyMatch(drivers, string) {
  return drivers.filter(
    function(name) {
      console.log(name);
      if ((name[0].toLowerCase() + name[1].toLowerCase()) === string.toLowerCase()) {
        return name;
      }
    }
  )
}

function matchName(drivers, string) {
  return drivers.filter(
    function(object) {
     if (object['name'].toLowerCase() === string.toLowerCase()) {
       return object;
     }
   })
};
