/**
 * makeFullNamesList()
 *
 * Write a function called `makeFullNamesList` that takes an array
 * of objects with first and last names properties and returns
 * an array of strings, where each string is a full title + first & last
 * name.
 *
**/

function makeFullNamesList(param){
	//console.log(param)
	let fullNamesList1 = []
	let  stringOne = ""
	//console.log(param[0].gender)
	for(let i = 0; i < param.length; i++){
		if (param[i].gender === "male") {
			stringOne = "Mr. " + param[i].first + " " +param[i].last
			fullNamesList1.push(stringOne)
		}else {
			stringTow = "Ms. " + param[i].first + " " +param[i].last
			fullNamesList1.push(stringTow)
		}
	}

	
	return fullNamesList1
}



//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var customersList = [
    { first: 'Joe', last: 'Blogs', gender: 'male'},
    { first: 'Kate', last: 'Smith', gender: 'female'},
    { first: 'Dave', last: 'Jones', gender: 'male'},
    { first: 'Jacky', last: 'White', gender: 'female'}
]


var moreCustomersList = [
	{ first: 'Ruby', last: 'Scooby', gender: 'female'},
	{ first: 'Jen', last: 'Vin', gender: 'female'},
	{ first: 'Dan', last: 'Theman', gender: 'male'},
]

//===============================
var fullNamesList1 = makeFullNamesList(customersList)
console.assert(typeof fullNamesList1[0] === "string")
console.assert(fullNamesList1[0] === "Mr. Joe Blogs")
console.assert(fullNamesList1[1] === "Ms. Kate Smith")
//-------------------------------
var moreNamesList = makeFullNamesList(moreCustomersList)
console.assert(typeof moreNamesList[1] === "string")
console.assert(moreNamesList[0] === "Ms. Ruby Scooby")
console.assert(moreNamesList[2] === "Mr. Dan Theman")
