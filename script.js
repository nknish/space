/*
Space
JS File
*/
//var aVals = [57.9, 108, 150, 228, 779, 1430, 2870, 4500];
//var bVals = [56.6703, 107.9974, 149.9783, 226.9905, 778.0643, 488.1149, 2866.9616, 4499.7277];


document.addEventListener("DOMContentLoaded", function() {
	const aVals = [7.60920495189872, 10.392304845413264, 12.24744871391589, 15.0996688705415, 27.910571473905726, 37.7888872554, 53.5723809439155, 67.08203932499369];
 	const bVals = [7.527967853278865, 10.392179752102058, 12.24656278308326, 15.06620390144777, 27.89380397149159, 37.8153408024, 53.54401553862019, 67.08000968992178];
	const kVals = [26.08797865515552, 10.216561475088758, 6.283185307179586, 3.3403430660178555, 0.5297795368616852, 0.21327852366529484, 0.0747909214043517, 0.03812612443676933, 0.02532521284635061];
	const thetaVals = [3.157300616857742, 4.576253298729132, 0.1117010721276371, 1.0873401239924672, 1.2234758056480248, 6.05105651666434, 0.9546951008408984, -0.024434609527920613];
	const names = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

	ellipse();

	function getIndx(planetName) {
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
		return x;
	}

	function ellipse() {
		/*const height = 100;
		const width = 100;
		const curr = document.getElementById(name);
		curr.rx = Math.round(width * aVals[i] / aVals[aVals.length-1] / 2);
		curr.ry = Math.round(height * bVals[i] / bVals[bVals.length-1] / 2);
		curr.cx = width/2;
		curr.cy = height/2;*/
	
		let height = 400;
		let width = 800;
	
		const canvas = document.getElementById("canvas");
		const ctx = canvas.getContext("2d");

		

		for (let i = 0; i < aVals.length; i++) {
			ctx.beginPath();
			let radiusx = width * aVals[i] / aVals[aVals.length-1] / 2;
			let radiusy = height * bVals[i] / bVals[bVals.length-1] / 2;
			ctx.ellipse(width/2, height/2, radiusx, radiusy, 0,  0, 2 * Math.PI);
			ctx.setLineDash([5,3]);
			ctx.strokeStyle = "White";
			ctx.globalAlpha = .5;
			ctx.stroke();
		}
	}


	function findPositions() {
		for(let i = 0; i < 8; i++) {
			position(names[i], 0);
		}
	}

	function position(planetName, time) {
		let t = time;
		let indx = getIndx(planetName);
		let a = aVals[indx];
		let b = bVals[indx];
		let k = kVals[indx];
		let theta = thetaVals[indx];
		let x = a * Math.cos(k*t+0);
		let y = b * Math.sin(k*t+0);

		let image = document.getElementById(planetName);

	}


	


});








// /*function ellipses() {
// 	/*let names = ["mercury-o","venus-o","earth-o","mars-o","jupiter-o","saturn-o","unanus-o","neptune-o"]
// 	for(let i = 0; i < 8; i++) {
// 		ellipse(names[i], i);
// 	}

// }*/


