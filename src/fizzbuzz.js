/*
Escribir una funcion al pasar un numero:
  - Si es multiplo de 3, devolver Fizz
  - Si es multiplo de 5, devolver Buzz
  - Si es multiplo de 3 y 5, devolver FizzBuzz
  - Si no es multiplo de 3 ni de 5, devolver el numero
*/

export const fizzBuzz = (number) => {

  if(typeof number !== "number") throw new Error("parameter must be a number");
  if(Number.isNaN(number)) throw new Error("parameter must be a number");

  // PUEDES HACER REFACTOR GRACIAS A QUE TIENES LOS TEST
  // if(number % 15 === 0) return "FizzBuzz";
  // if(number % 3 === 0) return "Fizz";
  // if(number % 5 === 0) return "Buzz";

  const multiples = {
    3: "Fizz",
    5: "Buzz",
    7: "Woff"
  }

  let output = ""

  Object
    .entries(multiples)
    .forEach(([multiple, word]) => {
      if(number % multiple === 0) output += word
    })
  
  return output || number;

}
