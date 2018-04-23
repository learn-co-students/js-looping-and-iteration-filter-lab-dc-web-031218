// Code your solution in this file
function findMatching(arr, match){
	return arr.filter(name=> name.toLowerCase() === match.toLowerCase());
}

function fuzzyMatch(arr, chars){
	return arr.filter(str=> str.substring(0, chars.length).toLowerCase()
					  === chars.toLowerCase());
}

function matchName(arr, name){
	return arr.filter(obj=> obj.name == name);
}