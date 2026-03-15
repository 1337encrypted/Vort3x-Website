module.exports = function(eleventyConfig) {

  // Static assets at repo root — copy into _site/ as-is
  eleventyConfig.addPassthroughCopy({ "css":     "css"     });
  eleventyConfig.addPassthroughCopy({ "images":  "images"  });
  eleventyConfig.addPassthroughCopy({ "fonts":   "fonts"   });
  eleventyConfig.addPassthroughCopy({ "scripts": "scripts" });
  eleventyConfig.addPassthroughCopy("src/javascripts");

  // JSON.stringify filter — used to safely embed HTML strings in <script> blocks
  // Avoids backtick escaping issues when content contains code examples
  eleventyConfig.addFilter("jsondump", (value) => JSON.stringify(value));

  // ShellX levels — sorted by frontmatter `order`
  eleventyConfig.addCollection("shellxLevels", (api) =>
    api.getFilteredByGlob("src/shellx/levels/*.md")
      .sort((a, b) => a.data.order - b.data.order)
  );

  // ByteX challenges (type: "challenge")
  eleventyConfig.addCollection("bytexChallenges", (api) =>
    api.getFilteredByGlob("src/bytex/levels/*.md")
      .filter(item => item.data.type === "challenge")
      .sort((a, b) => a.data.order - b.data.order)
  );

  // ByteX solutions (type: "solution")
  eleventyConfig.addCollection("bytexSolutions", (api) =>
    api.getFilteredByGlob("src/bytex/levels/*.md")
      .filter(item => item.data.type === "solution")
      .sort((a, b) => a.data.order - b.data.order)
  );

  // Documentation entries
  eleventyConfig.addCollection("docsEntries", (api) =>
    api.getFilteredByGlob("src/docs/entries/*.md")
      .sort((a, b) => a.data.order - b.data.order)
  );

  return {
    dir: {
      input:    "src",
      output:   "_site",
      includes: "_includes",
      data:     "_data"
    },
    templateFormats:       ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine:    "njk"
  };
};
