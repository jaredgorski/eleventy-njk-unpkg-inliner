<div align="center">
  <h1>eleventy-njk-unpkg-inliner</h1>
  <p>Inline npm modules from unpkg in Eleventy Nunjucks templates.</p>
</div>

<div align="center">
  <h2>Description</h2>
</div>

Use this package as part of your [Eleventy](https://github.com/11ty/eleventy/) setup (only with [Nunjucks](https://www.11ty.dev/docs/languages/nunjucks/)) to download modules from [npm](https://www.npmjs.com/) (via [unpkg](https://unpkg.com/)) and include them as inline scripts in your templates via a [shortcode](https://www.11ty.dev/docs/shortcodes/).

<div align="center">
  <h2>Usage</h2>
</div>

```
npm i eleventy-njk-unpkg-inliner --save-dev
```

#### .eleventy.js
```js
const unpkgInliner = require("eleventy-njk-unpkg-inliner");

module.exports = function(eleventyConfig) {
  ...

  eleventyConfig.addNunjucksAsyncShortcode('unpkgInliner', unpkgInliner);

  ...
}
```

#### some-template.njk
```html
...

<!-- remember to use type="module" -->
<script type="module">
  /* use the path from any unpkg URL */
  {% unpkgInliner "treeboxjs@0.2.0/dist/index.js" %}
</script>

...
```
