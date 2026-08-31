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

  // Sort an array of objects with a `date` field ("YYYY-MM-DD") in
  // descending order (newest first). Ties on the date are broken by
  // descending `id` so the most recent entry wins. Stable for unique dates.
  eleventyConfig.addFilter("sortByDateDesc", (arr) => {
    if (!Array.isArray(arr)) return arr;
    return arr.slice().sort((a, b) => {
      const da = String(a && a.date ? a.date : "");
      const db = String(b && b.date ? b.date : "");
      if (da !== db) return da < db ? 1 : -1; // descending
      const ia = a && typeof a.id === "number" ? a.id : 0;
      const ib = b && typeof b.id === "number" ? b.id : 0;
      return ib - ia; // tie-break: higher id first
    });
  });

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
