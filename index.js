// Code your solution in this file
function findMatching(list, name) {
  a = list.filter(function(n){
      return n.toLowerCase() === name.toLowerCase();
  });
  return a
}

function fuzzyMatch(list, namePart) {
  // returns a driver if beginning provided letters match
  const section = namePart.length;
  a = list.filter(function(n){
    nSlice = n.slice(0, section);
    return nSlice.toLowerCase() === namePart.toLowerCase();
  });
  return a
}

function matchName(list, name) {
  a = list.filter(function(n){
      return n.name.toLowerCase() === name.toLowerCase();
  });
  return a
}
