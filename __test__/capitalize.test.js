import { capitalize } from "../src/client/js/capitalize";

describe("capitalize", () => {
  test("should capitalize the first letter of a word", () => {
    const result = capitalize("hello");
    expect(result).toBe("Hello");
  });

  test("should convert the remaining letters to lowercase", () => {
    const result = capitalize("WORLD");
    expect(result).toBe("World");
  });

  test("should handle a single character input", () => {
    const result = capitalize("a");
    expect(result).toBe("A");
  });

  test("should handle an empty string input", () => {
    const result = capitalize("");
    expect(result).toBe("");
  });

  test("should handle a sentence with multiple words", () => {
    const result = capitalize("lONDON is a BeaUtiful CitY");
    expect(result).toBe("London is a beautiful city");
  });
});
