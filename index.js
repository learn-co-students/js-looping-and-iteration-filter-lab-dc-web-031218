// Code your solution in this file

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name){
	array = []
	for(let i = 0; i < drivers.length; i++){
		if (name === drivers[i]){
			array.push(drivers[i])
		} else if (drivers[i] === name.toLowerCase()) {
			array.push(drivers[i]);
		}
	}
	return array;
}

function fuzzyMatch(drivers, string){
	string = string.slice(0,3);
	array = drivers.filter(driver => driver.slice(0,2) === string);
	return array;
}

function matchName(drivers, string){
	let driver = drivers.filter(driver => driver.name === string);
	return driver;
}