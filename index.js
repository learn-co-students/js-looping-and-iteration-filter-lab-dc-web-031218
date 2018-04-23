function findMatching(array, string){
  let arrayToRet = [];
  for(const key in array){
    if (array[key].toUpperCase() === string.toUpperCase()){
      arrayToRet.push(array[key]);
    }
  }
  return arrayToRet;
}
function fuzzyMatch(array, string){
  let arrayToRet = [];
  for(const key in array){
    if (array[key][0] === string[0]){
      arrayToRet.push(array[key]);
    }
  }
  return arrayToRet;
}

function matchName(array, string){
  let arrayToRet = [];
  for(const key in array){
    if (array[key].name === string){
      arrayToRet.push(array[key]);
    }
  }
  return arrayToRet;
}
