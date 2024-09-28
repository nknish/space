/*
Space
JS File
*/

function position(planetName, time) {
	let x = -1;
	if (planetName === "mercury") {
		x = 0;
	}
	else if (planetName === "venus") {
		x = 1;
	}
	else if (planetName === "earth") {
		x = 2;
	}
	else if (planetName === "mars") {
		x = 3;
	}
	else if (planetName === "jupiter") {
		x = 4;
	}
	else if (planetName === "saturn") {
		x = 5;
	}
	else if (planetName === "uranus") {
		x = 6;
	}
	else if (planetName === "neptune") {
		x = 7;
	}
	if (x === -1)
		return x;
	
	
}