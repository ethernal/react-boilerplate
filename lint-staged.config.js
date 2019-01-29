module.exports = {
  linters: {
    "**/*.js" : ["jest --findRelatedTests"],
    "**/*.jsx": ["jest --findRelatedTests"],
    "**/*.ts" : ["jest --findRelatedTests"],
    "**/*.tsx": ["jest --findRelatedTests"],
  },
};
