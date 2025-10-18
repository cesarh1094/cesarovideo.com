/** @type {import("prettier").Config} */
export default {
  overrides: {
    plugins: ["prettier-plugin-astro"],
    files: "*.astro",
    options: {
      parser: "astro",
    },
  },
};
