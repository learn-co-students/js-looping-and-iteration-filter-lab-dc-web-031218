
function findMatching(array, string) {
  let filterarray = []
  for (const driver of array) {
    if (driver.toUpperCase() === string.toUpperCase()) {
      filterarray.push(driver);
      }
    }
    return filterarray
  }


function fuzzyMatch(array, sa) {
  let filterarray = []

  for (const driver of array) {
    if (driver.startsWith(sa)) {
      filterarray.push(driver);
      }
    }
    return filterarray
}


 function matchName(array, string){
   let filterarray = []

   for (const driver of array) {
     if (driver.name === string) {
       filterarray.push(driver);
       }
     }
     return filterarray
   }


// * `matchName` - This function takes an array of `drivers` and a `string` as arguments.
//  In this function, each element of the `drivers` array is a JavaScript object that has a
//   property of `name`. The function should return each element whose `name` property
//    matches the provided `string` argument.
