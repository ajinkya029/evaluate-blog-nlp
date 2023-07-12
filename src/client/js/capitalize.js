function capitalize(subjectivity) {
  return (
    subjectivity.charAt(0).toUpperCase() + subjectivity.slice(1).toLowerCase()
  );
}
module.exports = { capitalize };
