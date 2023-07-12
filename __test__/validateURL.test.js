// Import the function to be tested
const { isValidUrl } = require("../src/client/js/validateURL");

// Test case 1: Valid URL
test("Valid URL should return true", () => {
  const url = "https://example.com";
  expect(isValidUrl(url)).toBe(true);
});

// // Test case 2: Invalid URL
// test("Invalid URL should return false", () => {
//   const url = "example.com";
//   expect(isValidUrl(url)).toBe(false);
// });

// Test case 3: URL with path
test("URL with path should return true", () => {
  const url = "https://example.com/path/to/resource";
  expect(isValidUrl(url)).toBe(true);
});

// Test case 4: URL with query parameters
test("URL with query parameters should return true", () => {
  const url = "https://example.com/?param1=value1&param2=value2";
  expect(isValidUrl(url)).toBe(true);
});
