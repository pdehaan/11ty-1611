module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter("toArray", value => Array.isArray(value) ? value : [value]);

  return {
    dir: {
      input: "src",
      output: "www"
    }
  };
};
