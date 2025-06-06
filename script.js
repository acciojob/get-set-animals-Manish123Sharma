// //complete this code
// class Animal {
// 	constructor(species){
// 		this._species = species;
// 	}
// 	get species_get(){
// 		return this._species;
// 	}
// 	makeSound(){
// 		console.log(`The ${this._species} makes a sound`);
// 	}
// }

// class Dog extends Animal {
// 	purr(){
// 		console.log('purr');
// 	}
// }

// class Cat extends Animal {
// 	bark(){
// 		console.log('woof');
// 	}
// }

// // Do not change the code below this line
// window.Animal = Animal;
// window.Dog = Dog;
// window.Cat = Cat;


class Animal {
	constructor(species) {
		this._species = species;
	}

	get species() {
		return this._species;
	}

	makeSound() {
		console.log(`The ${this._species} makes a sound`);
	}
}

class Cat extends Animal {
	purr() {
		console.log("purr");
	}
}

class Dog extends Animal {
	bark() {
		console.log("woof");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
