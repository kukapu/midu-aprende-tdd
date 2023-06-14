import { describe, expect, it } from "vitest";
import { canReconfigure } from "../src/adventJS-23";


describe("AdventJS-23 canReconfigure", () => {

  it("should be a function", () => {
    expect(typeof canReconfigure).toBe("function");
  })

  it("should throw if first parametre is missing" , () => {
    expect(() => canReconfigure()).toThrow();
  })

  it("should throw if first parametre is not a string" , () => {
    expect(() => canReconfigure(2)).toThrow();
  })

  it("should throw if second parametre is not a string" , () => {
    expect(() => canReconfigure('a')).toThrow();
  })

  it("should return a boolean" , () => {
    expect(typeof canReconfigure('a', 'b')).toBe("boolean");
  })

  it("should return false if string provided have different length even with same unique letters" , () => {
    expect(canReconfigure('aab', 'ab')).toBe(false);
  })

  it("should return false if strings provided have different number of unique letters" , () => {
    expect(canReconfigure('abc', 'ddd')).toBe(false);
  })

  it("should return false if string have different order of transformation" , () => {
    expect(canReconfigure('XBOX', 'XXBO')).toBe(false);
  })

})