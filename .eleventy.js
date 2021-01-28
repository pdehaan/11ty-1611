module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter("toArray", value => {
    if (Array.isArray(value)) {
      return value;
    }
    return [value];
  });

  return {
    dir: {
      input: "src",
      output: "www"
    }
  };
};
