/**
 * makeNamesObject()
 *
 * Create a function that accepts 3 strings with first + last names as arguments
 * The function should return an object with 3 properties:
 * The first name will be a property-name and the last name will be the value
 *
 * EXAMPLE:
 * makeNamesObject("George Washington", "John Adams", "Kanye West")
 *   =>
 *   {
 *      George: "Washington",
 *      John: "Adams",
 *      Kanye: "West"
 *   }
 *
 * HINT: You may need to review `object bracket notation` to dynamically
 *       set an object's property name.
 *
/ **
 * makeNamesObject ()
 *
 * Crea una función que acepta 3 cadenas con los primeros + apellidos como argumentos
 * La función debería devolver un objeto con 3 propiedades:
 * El primer nombre será un nombre de propiedad y el apellido será el valor
 *
 * EJEMPLO:
 * makeNamesObject ("George Washington", "John Adams", "Kanye West")
 * =>
 * {
 * George: "Washington",
 * John: "Adams",
 *      Kanye West"
 *}
 *
 * SUGERENCIA: es posible que deba revisar `la notación del corchete del objeto` dinámicamente
 * establecer el nombre de propiedad de un objeto.
 *
*/


function makeNamesObject(nombre, apellido, apellido2){
	let nombreObj = nombre.split(" ")// convierto strin en array 
	let propiedad = nombreObj[0] 
	let valor = nombreObj[1] 

	let apellidoObj = apellido.split(" ")// convierto strin en array 
	let propiedad2 = apellidoObj[0] 
	let valor2 = apellidoObj[1] 

	let apellidoObj3 = apellido2.split(" ")// convierto strin en array 
	let propiedad3 = apellidoObj3[0] 
	let valor3 = apellidoObj3[1] 


	//console.log(propiedad)
	//console.log(valor)

	const greatMenObj = {
		
	}

	
	
	greatMenObj[propiedad]= valor
	greatMenObj[propiedad2]= valor2
	greatMenObj[propiedad3]= valor3	

	return greatMenObj

}

/*

function asignar(param){
	let nombreObj = param.split(" ")// convierto strin en array 
	let propiedad = nombreObj[0] 
	let valor = nombreObj[1] 

	return [propiedad] = valor


}
*/













//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var greatMenObj = makeNamesObject("George Washington", "Abe Lincoln", "Kanye West")
var greatWomenObj = makeNamesObject("Rosa Parks", "Amelia Earhart", "Charlotte Webb")

console.assert(greatMenObj.George === "Washington")
console.assert(greatMenObj['Abe'] === "Lincoln")
console.assert(greatMenObj.Kanye === "West")
//-------------------
console.assert(greatWomenObj.Rosa === "Parks")
console.assert(greatWomenObj.Charlotte === "Webb")
