import resolve from "@rollup/plugin-node-resolve";

const config = {
  input: "index.js",
  output: {
    file: "dist/dom-accessibility-api.js",
    format: "umd",
    name: "DomAccessibilityApi",
  },
  plugins: [resolve()],
};

export default config;
