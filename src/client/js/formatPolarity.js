function formatPolarity(polarity) {
  switch (polarity) {
    case "P+":
      return "Strong Positive";
    case "P":
      return "Positive";
    case "NEU":
      return "Neutral";
    case "N":
      return "Negative";
    case "N+":
      return "Strong Negative";
    case "NONE":
      return "Without Polarity";
    default:
      return polarity;
  }
}

module.exports = { formatPolarity };
