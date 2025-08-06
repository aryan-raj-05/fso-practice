class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	greet() {
		return `hello, my name is ${this.name}. I am ${this.age} years old.`
	}
}

const adam = new Person("Adam", 13)
console.log(adam.greet());