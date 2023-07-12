function isValidUrl(url) {
  // Regular expression pattern for URL validation
  const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;

  // Test the URL against the pattern
  return urlPattern.test(url);
}

module.exports = { isValidUrl };
