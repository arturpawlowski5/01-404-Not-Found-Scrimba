// PERSON IMG

let img01 = "sindre.svg";
let img02 = "per.svg";
let img03 = "frode.svg";
let img04 = "leanne.svg";
let img05 = "alex.svg";
let img06 = "bob.svg";

let personImg = [img01, img02, img03, img04, img05, img06];

// PERSON SMILE

// let personPhoto02Smile = ["person-01.svg", "person-02.svg", "person-03.svg", "person-04.svg", "person-05.svg", "person-06.svg"];

// let personPhoto03Smile = ["person-01.svg", "person-02.svg", "person-03.svg", "person-04.svg", "person-05.svg", "person-06.svg"];

// let personPhoto04Smile = ["person-01.svg", "person-02.svg", "person-03.svg", "person-04.svg", "person-05.svg", "person-06.svg"];

// let personPhoto05Smile = ["person-01.svg", "person-02.svg", "person-03.svg", "person-04.svg", "person-05.svg", "person-06.svg"];

// let personPhoto06Smile = ["person-01.svg", "person-02.svg", "person-03.svg", "person-04.svg", "person-05.svg", "person-06.svg"];

// BLOB

let blob01 = "sindre-blob.svg";
let blob02 = "per-blob.svg";
let blob03 = "frode-blob.svg";
let blob04 = "leanne-blob.svg";
let blob05 = "alex-blob.svg";
let blob06 = "bob-blob.svg";

let personBlob = [blob01, blob02, blob03, blob04, blob05, blob06];

// NAME

let personName = ["sindre", "per", "frode", "leanne", "alex", "bob"];

// PERSON 01

function person01() {
	let randomNumber01 = Math.floor(Math.random() * personName.length);
	let randomNumber02 = Math.floor(Math.random() * personName.length);
	let randomNumber03 = Math.floor(Math.random() * personName.length);
	let randomNumber04 = Math.floor(Math.random() * personName.length);
	let randomNumber05 = Math.floor(Math.random() * personName.length);
	let randomNumber06 = Math.floor(Math.random() * personName.length);

	document.getElementById("personPhoto01").src = "svg/" + personImg[randomNumber01];
	document.getElementById("personPhoto02").src = "svg/" + personImg[randomNumber02];
	document.getElementById("personPhoto03").src = "svg/" + personImg[randomNumber03];
	document.getElementById("personPhoto04").src = "svg/" + personImg[randomNumber04];
	document.getElementById("personPhoto05").src = "svg/" + personImg[randomNumber05];
	document.getElementById("personPhoto06").src = "svg/" + personImg[randomNumber06];

	document.getElementById("blob01").src = "svg/" + personBlob[randomNumber01];
	document.getElementById("blob02").src = "svg/" + personBlob[randomNumber02];
	document.getElementById("blob03").src = "svg/" + personBlob[randomNumber03];
	document.getElementById("blob04").src = "svg/" + personBlob[randomNumber04];
	document.getElementById("blob05").src = "svg/" + personBlob[randomNumber05];
	document.getElementById("blob06").src = "svg/" + personBlob[randomNumber06];

	document.getElementById("name01").innerHTML = personName[randomNumber01];
	document.getElementById("name02").innerHTML = personName[randomNumber02];
	document.getElementById("name03").innerHTML = personName[randomNumber03];
	document.getElementById("name04").innerHTML = personName[randomNumber04];
	document.getElementById("name05").innerHTML = personName[randomNumber05];
	document.getElementById("name06").innerHTML = personName[randomNumber06];
}

// PERSON 02

function person02() {
	let randomNumber01 = Math.floor(Math.random() * personName.length);
	let randomNumber02 = Math.floor(Math.random() * personName.length);
	let randomNumber03 = Math.floor(Math.random() * personName.length);
	let randomNumber04 = Math.floor(Math.random() * personName.length);
	let randomNumber05 = Math.floor(Math.random() * personName.length);
	let randomNumber06 = Math.floor(Math.random() * personName.length);

	document.getElementById("personPhoto01").src = "svg/" + personImg[randomNumber01];
	document.getElementById("personPhoto02").src = "svg/" + personImg[randomNumber02];
	document.getElementById("personPhoto03").src = "svg/" + personImg[randomNumber03];
	document.getElementById("personPhoto04").src = "svg/" + personImg[randomNumber04];
	document.getElementById("personPhoto05").src = "svg/" + personImg[randomNumber05];
	document.getElementById("personPhoto06").src = "svg/" + personImg[randomNumber06];

	document.getElementById("blob01").src = "svg/" + personBlob[randomNumber01];
	document.getElementById("blob02").src = "svg/" + personBlob[randomNumber02];
	document.getElementById("blob03").src = "svg/" + personBlob[randomNumber03];
	document.getElementById("blob04").src = "svg/" + personBlob[randomNumber04];
	document.getElementById("blob05").src = "svg/" + personBlob[randomNumber05];
	document.getElementById("blob06").src = "svg/" + personBlob[randomNumber06];

	document.getElementById("name01").innerHTML = personName[randomNumber01];
	document.getElementById("name02").innerHTML = personName[randomNumber02];
	document.getElementById("name03").innerHTML = personName[randomNumber03];
	document.getElementById("name04").innerHTML = personName[randomNumber04];
	document.getElementById("name05").innerHTML = personName[randomNumber05];
	document.getElementById("name06").innerHTML = personName[randomNumber06];
}

// PERSON 03

function person03() {
	let randomNumber01 = Math.floor(Math.random() * personName.length);
	let randomNumber02 = Math.floor(Math.random() * personName.length);
	let randomNumber03 = Math.floor(Math.random() * personName.length);
	let randomNumber04 = Math.floor(Math.random() * personName.length);
	let randomNumber05 = Math.floor(Math.random() * personName.length);
	let randomNumber06 = Math.floor(Math.random() * personName.length);

	document.getElementById("personPhoto01").src = "svg/" + personImg[randomNumber01];
	document.getElementById("personPhoto02").src = "svg/" + personImg[randomNumber02];
	document.getElementById("personPhoto03").src = "svg/" + personImg[randomNumber03];
	document.getElementById("personPhoto04").src = "svg/" + personImg[randomNumber04];
	document.getElementById("personPhoto05").src = "svg/" + personImg[randomNumber05];
	document.getElementById("personPhoto06").src = "svg/" + personImg[randomNumber06];

	document.getElementById("blob01").src = "svg/" + personBlob[randomNumber01];
	document.getElementById("blob02").src = "svg/" + personBlob[randomNumber02];
	document.getElementById("blob03").src = "svg/" + personBlob[randomNumber03];
	document.getElementById("blob04").src = "svg/" + personBlob[randomNumber04];
	document.getElementById("blob05").src = "svg/" + personBlob[randomNumber05];
	document.getElementById("blob06").src = "svg/" + personBlob[randomNumber06];

	document.getElementById("name01").innerHTML = personName[randomNumber01];
	document.getElementById("name02").innerHTML = personName[randomNumber02];
	document.getElementById("name03").innerHTML = personName[randomNumber03];
	document.getElementById("name04").innerHTML = personName[randomNumber04];
	document.getElementById("name05").innerHTML = personName[randomNumber05];
	document.getElementById("name06").innerHTML = personName[randomNumber06];
}

// PERSON 04

function person04() {
	let randomNumber01 = Math.floor(Math.random() * personName.length);
	let randomNumber02 = Math.floor(Math.random() * personName.length);
	let randomNumber03 = Math.floor(Math.random() * personName.length);
	let randomNumber04 = Math.floor(Math.random() * personName.length);
	let randomNumber05 = Math.floor(Math.random() * personName.length);
	let randomNumber06 = Math.floor(Math.random() * personName.length);

	document.getElementById("personPhoto01").src = "svg/" + personImg[randomNumber01];
	document.getElementById("personPhoto02").src = "svg/" + personImg[randomNumber02];
	document.getElementById("personPhoto03").src = "svg/" + personImg[randomNumber03];
	document.getElementById("personPhoto04").src = "svg/" + personImg[randomNumber04];
	document.getElementById("personPhoto05").src = "svg/" + personImg[randomNumber05];
	document.getElementById("personPhoto06").src = "svg/" + personImg[randomNumber06];

	document.getElementById("blob01").src = "svg/" + personBlob[randomNumber01];
	document.getElementById("blob02").src = "svg/" + personBlob[randomNumber02];
	document.getElementById("blob03").src = "svg/" + personBlob[randomNumber03];
	document.getElementById("blob04").src = "svg/" + personBlob[randomNumber04];
	document.getElementById("blob05").src = "svg/" + personBlob[randomNumber05];
	document.getElementById("blob06").src = "svg/" + personBlob[randomNumber06];

	document.getElementById("name01").innerHTML = personName[randomNumber01];
	document.getElementById("name02").innerHTML = personName[randomNumber02];
	document.getElementById("name03").innerHTML = personName[randomNumber03];
	document.getElementById("name04").innerHTML = personName[randomNumber04];
	document.getElementById("name05").innerHTML = personName[randomNumber05];
	document.getElementById("name06").innerHTML = personName[randomNumber06];
}

// PERSON 05

function person05() {
	let randomNumber01 = Math.floor(Math.random() * personName.length);
	let randomNumber02 = Math.floor(Math.random() * personName.length);
	let randomNumber03 = Math.floor(Math.random() * personName.length);
	let randomNumber04 = Math.floor(Math.random() * personName.length);
	let randomNumber05 = Math.floor(Math.random() * personName.length);
	let randomNumber06 = Math.floor(Math.random() * personName.length);

	document.getElementById("personPhoto01").src = "svg/" + personImg[randomNumber01];
	document.getElementById("personPhoto02").src = "svg/" + personImg[randomNumber02];
	document.getElementById("personPhoto03").src = "svg/" + personImg[randomNumber03];
	document.getElementById("personPhoto04").src = "svg/" + personImg[randomNumber04];
	document.getElementById("personPhoto05").src = "svg/" + personImg[randomNumber05];
	document.getElementById("personPhoto06").src = "svg/" + personImg[randomNumber06];

	document.getElementById("blob01").src = "svg/" + personBlob[randomNumber01];
	document.getElementById("blob02").src = "svg/" + personBlob[randomNumber02];
	document.getElementById("blob03").src = "svg/" + personBlob[randomNumber03];
	document.getElementById("blob04").src = "svg/" + personBlob[randomNumber04];
	document.getElementById("blob05").src = "svg/" + personBlob[randomNumber05];
	document.getElementById("blob06").src = "svg/" + personBlob[randomNumber06];

	document.getElementById("name01").innerHTML = personName[randomNumber01];
	document.getElementById("name02").innerHTML = personName[randomNumber02];
	document.getElementById("name03").innerHTML = personName[randomNumber03];
	document.getElementById("name04").innerHTML = personName[randomNumber04];
	document.getElementById("name05").innerHTML = personName[randomNumber05];
	document.getElementById("name06").innerHTML = personName[randomNumber06];
}

// PERSON 06

function person06() {
	let randomNumber01 = Math.floor(Math.random() * personName.length);
	let randomNumber02 = Math.floor(Math.random() * personName.length);
	let randomNumber03 = Math.floor(Math.random() * personName.length);
	let randomNumber04 = Math.floor(Math.random() * personName.length);
	let randomNumber05 = Math.floor(Math.random() * personName.length);
	let randomNumber06 = Math.floor(Math.random() * personName.length);

	document.getElementById("personPhoto01").src = "svg/" + personImg[randomNumber01];
	document.getElementById("personPhoto02").src = "svg/" + personImg[randomNumber02];
	document.getElementById("personPhoto03").src = "svg/" + personImg[randomNumber03];
	document.getElementById("personPhoto04").src = "svg/" + personImg[randomNumber04];
	document.getElementById("personPhoto05").src = "svg/" + personImg[randomNumber05];
	document.getElementById("personPhoto06").src = "svg/" + personImg[randomNumber06];

	document.getElementById("blob01").src = "svg/" + personBlob[randomNumber01];
	document.getElementById("blob02").src = "svg/" + personBlob[randomNumber02];
	document.getElementById("blob03").src = "svg/" + personBlob[randomNumber03];
	document.getElementById("blob04").src = "svg/" + personBlob[randomNumber04];
	document.getElementById("blob05").src = "svg/" + personBlob[randomNumber05];
	document.getElementById("blob06").src = "svg/" + personBlob[randomNumber06];

	document.getElementById("name01").innerHTML = personName[randomNumber01];
	document.getElementById("name02").innerHTML = personName[randomNumber02];
	document.getElementById("name03").innerHTML = personName[randomNumber03];
	document.getElementById("name04").innerHTML = personName[randomNumber04];
	document.getElementById("name05").innerHTML = personName[randomNumber05];
	document.getElementById("name06").innerHTML = personName[randomNumber06];
}

// COUNTER

let number = 404;

let color = ["#FFFDDF", "#CEEEDF", "#D5DBFF"];

function myCounter() {
	let finish = document.getElementById("win").innerText;
	if (finish === "ERROR") {
		console.log("ERRRROR");

		personName[0] = document.getElementById("name01").innerHTML;
		personName[1] = document.getElementById("name02").innerHTML;
		personName[2] = document.getElementById("name03").innerHTML;
		personName[3] = document.getElementById("name04").innerHTML;
		personName[4] = document.getElementById("name05").innerHTML;
		personName[5] = document.getElementById("name06").innerHTML;

		personImg[0] = document.getElementById("name01").innerHTML + ".svg";
		personImg[1] = document.getElementById("name02").innerHTML + ".svg";
		personImg[2] = document.getElementById("name03").innerHTML + ".svg";
		personImg[3] = document.getElementById("name04").innerHTML + ".svg";
		personImg[4] = document.getElementById("name05").innerHTML + ".svg";
		personImg[5] = document.getElementById("name06").innerHTML + ".svg";

		personBlob[0] = document.getElementById("name01").innerHTML + "-blob.svg";
		personBlob[1] = document.getElementById("name02").innerHTML + "-blob.svg";
		personBlob[2] = document.getElementById("name03").innerHTML + "-blob.svg";
		personBlob[3] = document.getElementById("name04").innerHTML + "-blob.svg";
		personBlob[4] = document.getElementById("name05").innerHTML + "-blob.svg";
		personBlob[5] = document.getElementById("name06").innerHTML + "-blob.svg";

		finish = document.getElementById("win").innerText;

		console.log(personName);
		console.log(personImg);
		console.log(finish);

		let a = ["sindre", "sindre", "sindre", "sindre", "sindre", "sindre"];
		let b = ["per", "per", "per", "per", "per", "per"];
		let c = ["frode", "frode", "frode", "frode", "frode", "frode"];
		let d = ["leanne", "leanne", "leanne", "leanne", "leanne", "leanne"];
		let e = ["alex", "alex", "alex", "alex", "alex", "alex"];
		let f = ["bob", "bob", "bob", "bob", "bob", "bob"];

		////////////////////

		// SINDRE

		function isEquivalentSindre(x, y) {
			// Create arrays of property names
			let xProps = Object.getOwnPropertyNames(x);
			let yProps = Object.getOwnPropertyNames(y);

			// If number of properties is different,
			// objects are not equivalent
			if (xProps.length != yProps.length) {
				return false;
			}

			for (let i = 0; i < xProps.length; i++) {
				let propName = xProps[i];

				// If values of same property are not equal,
				// objects are not equivalent
				if (x[propName] !== y[propName]) {
					return false;
				}
			}

			// objects are considered equivalent
			return true;
		}

		// Outputs: true
		// console.log(isEquivalentSindre(personName, a));

		if (isEquivalentSindre(personName, a)) {
			let randomNumber = Math.floor(Math.random() * color.length);
			document.body.style.backgroundColor = color[randomNumber];

			// document.body.style.backgroundColor = "#FFFDDF";
			document.getElementById("win").innerHTML = "SINDRE";
		}

		// PER

		function isEquivalentPer(x, y) {
			// Create arrays of property names
			let xProps = Object.getOwnPropertyNames(x);
			let yProps = Object.getOwnPropertyNames(y);

			// If number of properties is different,
			// objects are not equivalent
			if (xProps.length != yProps.length) {
				return false;
			}

			for (let i = 0; i < xProps.length; i++) {
				let propName = xProps[i];

				// If values of same property are not equal,
				// objects are not equivalent
				if (x[propName] !== y[propName]) {
					return false;
				}
			}

			// objects are considered equivalent
			return true;
		}

		// Outputs: true
		// console.log(isEquivalentPer(personName, b));

		if (isEquivalentPer(personName, b)) {
			let randomNumber = Math.floor(Math.random() * color.length);
			document.body.style.backgroundColor = color[randomNumber];

			// document.body.style.backgroundColor = "#FFFDDF";
			document.getElementById("win").innerHTML = "PER";
		}

		// FRODE

		function isEquivalentFrode(x, y) {
			// Create arrays of property names
			let xProps = Object.getOwnPropertyNames(x);
			let yProps = Object.getOwnPropertyNames(y);

			// If number of properties is different,
			// objects are not equivalent
			if (xProps.length != yProps.length) {
				return false;
			}

			for (let i = 0; i < xProps.length; i++) {
				let propName = xProps[i];

				// If values of same property are not equal,
				// objects are not equivalent
				if (x[propName] !== y[propName]) {
					return false;
				}
			}

			// objects are considered equivalent
			return true;
		}

		// Outputs: true
		// console.log(isEquivalentFrode(personName, c));

		if (isEquivalentFrode(personName, c)) {
			let randomNumber = Math.floor(Math.random() * color.length);
			document.body.style.backgroundColor = color[randomNumber];

			// document.body.style.backgroundColor = "#CEEEDF";
			document.getElementById("win").innerHTML = "FRODE";
		}

		// LEANNE

		function isEquivalentLeanne(x, y) {
			// Create arrays of property names
			let xProps = Object.getOwnPropertyNames(x);
			let yProps = Object.getOwnPropertyNames(y);

			// If number of properties is different,
			// objects are not equivalent
			if (xProps.length != yProps.length) {
				return false;
			}

			for (let i = 0; i < xProps.length; i++) {
				let propName = xProps[i];

				// If values of same property are not equal,
				// objects are not equivalent
				if (x[propName] !== y[propName]) {
					return false;
				}
			}

			// objects are considered equivalent
			return true;
		}

		// Outputs: true
		// console.log(isEquivalentLeanne(personName, d));

		if (isEquivalentLeanne(personName, d)) {
			let randomNumber = Math.floor(Math.random() * color.length);
			document.body.style.backgroundColor = color[randomNumber];

			// document.body.style.backgroundColor = "#CEEEDF";
			document.getElementById("win").innerHTML = "LEANNE";
		}

		// ALEX

		function isEquivalentAlex(x, y) {
			// Create arrays of property names
			let xProps = Object.getOwnPropertyNames(x);
			let yProps = Object.getOwnPropertyNames(y);

			// If number of properties is different,
			// objects are not equivalent
			if (xProps.length != yProps.length) {
				return false;
			}

			for (let i = 0; i < xProps.length; i++) {
				let propName = xProps[i];

				// If values of same property are not equal,
				// objects are not equivalent
				if (x[propName] !== y[propName]) {
					return false;
				}
			}

			// objects are considered equivalent
			return true;
		}

		// Outputs: true
		// console.log(isEquivalentAlex(personName, e));

		if (isEquivalentAlex(personName, e)) {
			let randomNumber = Math.floor(Math.random() * color.length);
			document.body.style.backgroundColor = color[randomNumber];

			// document.body.style.backgroundColor = "#D5DBFF";
			document.getElementById("win").innerHTML = "ALEX";
		}

		// BOB

		function isEquivalentBob(x, y) {
			// Create arrays of property names
			let xProps = Object.getOwnPropertyNames(x);
			let yProps = Object.getOwnPropertyNames(y);

			// If number of properties is different,
			// objects are not equivalent
			if (xProps.length != yProps.length) {
				return false;
			}

			for (let i = 0; i < xProps.length; i++) {
				let propName = xProps[i];

				// If values of same property are not equal,
				// objects are not equivalent
				if (x[propName] !== y[propName]) {
					return false;
				}
			}

			// objects are considered equivalent
			return true;
		}

		// Outputs: true
		// console.log(isEquivalentBob(personName, f));

		if (isEquivalentBob(personName, f)) {
			let randomNumber = Math.floor(Math.random() * color.length);
			document.body.style.backgroundColor = color[randomNumber];

			// document.body.style.backgroundColor = "#D5DBFF";
			document.getElementById("win").innerHTML = "BOB";
		}

		document.getElementById("error").innerHTML = number += 1;

		// let randomNumber = Math.floor(Math.random() * color.length);
		// document.body.style.backgroundColor = color[randomNumber];
	} else {
		console.log("WINNNNN");
		// return;
	}
}
