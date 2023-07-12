import { formatPolarity } from "../src/client/js/formatPolarity";

describe("formatPolarity", () => {
  test('should return "Strong Positive" when polarity is "P+"', () => {
    const result = formatPolarity("P+");
    expect(result).toBe("Strong Positive");
  });

  test('should return "Positive" when polarity is "P"', () => {
    const result = formatPolarity("P");
    expect(result).toBe("Positive");
  });

  test('should return "Neutral" when polarity is "NEU"', () => {
    const result = formatPolarity("NEU");
    expect(result).toBe("Neutral");
  });

  test('should return "Negative" when polarity is "N"', () => {
    const result = formatPolarity("N");
    expect(result).toBe("Negative");
  });

  test('should return "Strong Negative" when polarity is "N+"', () => {
    const result = formatPolarity("N+");
    expect(result).toBe("Strong Negative");
  });

  test('should return "Without Polarity" when polarity is "NONE"', () => {
    const result = formatPolarity("NONE");
    expect(result).toBe("Without Polarity");
  });

  test("should return the same polarity when polarity is unknown", () => {
    const result = formatPolarity("unknown");
    expect(result).toBe("unknown");
  });
});
