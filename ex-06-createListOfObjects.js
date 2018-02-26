/**
 * createListOfObjects()
 *
 * Write a function called createListOfObjects that accepts an
 * an array of strings with first and last names and returns
 * an array of objects that each have the property `firstName`
 * and `lastName` and first name and last name values
 * corresponding value
 *
 * var namesList = ['Cameron Betts', 'Shana Lopez', 'Angela Li']
 *
 * createListOfObjects(namesList)
 *  =>
 *  [
 *     { firstName: 'Camer', lastName: 'Betts'},
 *     { firstName: 'Shana', lastName: 'Lopez'},
 *     { firstName: 'Angela', lastName: 'Li'}
 *  ]
 *
 * HINT: You might be able to reuse some of the logic from createNameObject()


Una funcion que acette cadena y devuenva un array de objetos 

*/
/*
function nuevoArray (param2){
  //console.log(param2)

  console.log(param2.length)
  let nombre = ""
  a
  for(let j = 0; j < param2.length; j++){
    nombre = param2[j]
    
  }

  console.log(damian)

}



function createListOfObjects (param){
  //console.log(param)
  let propiedad = false
  let nombre = ""
  let apellido = ""
  
  for(let i = 0; i < param.length; i++){
    //console.log(param[i])
    propiedad = param[i].split(" ")
    //console.log(propiedad)
    nombre = propiedad[0]
    apellido = propiedad[1]
    let fila = `{[firstName] {$nombre}, [lastName] {$apellido}}`
  }



  sdsd =[
    [fila]
  ]

  console.log(sdsd)
  
 
  //let carro = nuevoArray(propiedad)

}


*/


function createListOfObjects (param){
  let result = []
  for( let i = 0; i < param.length; i++){
    const name = param[i].split(" ")
    const newNameObject = {
      firstName: name[0],
      lastName: name[1]
    }

    result.push(newNameObject)

  }

  return result 
}




//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var realNinjas = [
  'Chuck Norris',
  'Jackie Chan',
  'Lucy Liu',
  'Billy Blanks',
  'Michelle Yeoh',
  'Jet Li'
]




var realSportsStars = [
	'Kenny Powers',
	'Ricky Vaughn',
	'Dottie Hinson',
	'Jesus Shuttlesworth',
	'Scotty Smalls'
]

//createListOfObjects (realSportsStars)

var ninjaListOfObjects = createListOfObjects(realNinjas)

console.assert(typeof ninjaListOfObjects[0] === "object")
console.assert(ninjaListOfObjects[0].firstName === "Chuck")
console.assert(ninjaListOfObjects[0].lastName === "Norris")
console.assert(ninjaListOfObjects[1].firstName === "Jackie")
console.assert(ninjaListOfObjects[1].lastName === "Chan")
console.assert(ninjaListOfObjects[3].firstName === "Billy")
console.assert(ninjaListOfObjects[3].lastName === "Blanks")

//------------------------------
var sportStarsListOfObjects = createListOfObjects(realSportsStars)
console.assert(typeof sportStarsListOfObjects === "object")
console.assert(sportStarsListOfObjects[1].firstName === "Ricky")
console.assert(sportStarsListOfObjects[1].lastName === "Vaughn")
console.assert(sportStarsListOfObjects[3].firstName === "Jesus")
console.assert(sportStarsListOfObjects[3].lastName === "Shuttlesworth")
