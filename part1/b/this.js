const arto = {
	name: 'Arto Hellas',
	age: 35,
	education: 'PhD',
	greet: function() {
		console.log(`hello, my name is ${this.name}`)
	},
	doAddition: function(a, b) {
		console.log(a + b)
	},
}

arto.greet()

const refToGreet = arto.greet
refToGreet()

arto.growOlder = function() {
	this.age += 1
}

console.log(arto.age)
arto.growOlder()
console.log(arto.age)

arto.doAddition(1, 4)

const refToAdd = arto.doAddition
refToAdd(10, 15)
