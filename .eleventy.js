module.exports = function (eleventyConfig) {
  // --- Nunjucks custom filters ---------------------------------------------
  // Format an ISO date string (YYYY-MM-DD) as a human-readable date.
  eleventyConfig.addFilter("readableDate", (value) => {
    if (!value) return "";
    const d = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(d.getTime())) return String(value);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  });

  // Current year for the footer / copyright.
  eleventyConfig.addFilter("currentYear", () => String(new Date().getFullYear()));

  // Pass-through static assets
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addWatchTarget("src/css/");
  eleventyConfig.addWatchTarget("src/js/");
  eleventyConfig.addWatchTarget("src/_data/");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["njk", "html", "md", "json"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
