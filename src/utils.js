function snakeCaseToCamelCase(str) {
  return str.replace(/([-_][a-z])/g, (g) => g.toUpperCase().replace(/[_-]/, ''));
}

function objectPropsToCamelCase(object) {
  const newObject = {};
  Object.entries(object).forEach(([key, value]) => {
    newObject[snakeCaseToCamelCase(key)] = value;
  });
  return newObject;
}

export default objectPropsToCamelCase;
