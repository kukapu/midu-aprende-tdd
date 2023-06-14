import { describe, expect, it } from "vitest";
import { fizzBuzz } from "../src/fizzbuzz";

describe("FizzBuzz", () => {

  // NO HAY QUE DEJAR AL FINAL TODOS LOS TEST, ELIMINAR LOS REDUNDANTES
  // QUE NO APORTAN NADA
  // it ("should ba a function", () => {
  //   expect(typeof fizzBuzz).toBe("function");
  // })

  it("should throw if no number is provided", () => {
    expect(() => fizzBuzz()).toThrow();
  })

  it("should throw a specific error message if no number is provided", () => {
    expect(() => fizzBuzz()).toThrow('parameter must be a number');
  })

  it("should throw a specific error message if not a number is provided", () => {
    expect(() => fizzBuzz(NaN)).toThrow('parameter must be a number');
  })

  it("should return 1 if number provided is 1", () => {
    expect(fizzBuzz(1)).toBe(1);
  })

  it("should return 2 if number provided is 2", () => {
    expect(fizzBuzz(2)).toBe(2);
  })

  it("should return Fizz if number provided is 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  })

  it("should return Fizz if number provided is multiple of 3", () => {
    expect(fizzBuzz(6)).toBe("Fizz");
    expect(fizzBuzz(9)).toBe("Fizz");
    expect(fizzBuzz(12)).toBe("Fizz");
  })

  // SI EL TEST PASA VERDE DE PRIMERA, ESTUDIAR EL CASO POR SI TIENE SENTIDO DEJARLO
  // it("should return 4 if number provided is 4", () => {
  //   expect(fizzBuzz(4)).toBe(4);
  // })

  it("should return Buzz if number provided is multiple of 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(10)).toBe("Buzz");
    expect(fizzBuzz(20)).toBe("Buzz");
  })

  it("should return FizzBuzz if number provided is multiple of 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(30)).toBe("FizzBuzz");
    expect(fizzBuzz(45)).toBe("FizzBuzz");
  })

  it("should return Woff if number provided is 7", () => {
    expect(fizzBuzz(7)).toBe("Woff");
  })

  it("should return FizzWoff if number provided is multiple of 3 and 7", () => {
    expect(fizzBuzz(21)).toBe("FizzWoff");
  })
})
