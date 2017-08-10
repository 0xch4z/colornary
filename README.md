<h1 align="center">🎨 Colornary</h1>
<p align="center">A lightweight javascript library for converting, parsing, and manipulating colors.</p>
<p align="center">
  <img src="https://img.shields.io/travis/Charliekenney23/colornary.svg" alt="Travis"/>
  <img src="https://img.shields.io/npm/v/colornary.svg" alt="NPM">
</p>
<h2>🚀 Including Colornary</h2>
<h4>Node</h4>
<p>
  To include with Node, install via npm.
</p>

```shell
  $ npm install --save colornary
```
<h4>Browser</h4>
<p>
  To use in the browser, download the script and add the tag.
</p>

```html
  <script src="modules/colornary.js"></script>
```
<h2>🌈 Converting Colors</h2>
<h4>Color ⇒ RGB</h4>

```js
  const myRgbColor = toRgb('#fff');
  // => `rgb(255, 255, 255)`
```
<h4> <a href="#color-note">Color</a> ⇒ RGBA</h4>

```js
  const myRgbaColor = toRgba('hsla(0, 0%, 100%, 0.5)');
  // => `rgb(255, 255, 255, 0.5)`
```
<h4> <a href="#color-note">Color</a> ⇒ Hex</h4>

```js
  const myHexColor = toHex('hsl(195, 100%, 50%)');
  // => `#00bfff`
```
<h4> <a href="#color-note">Color</a> ⇒ HSL</h4>

```js
  const myHslColor = toHsl('#ff00ff');
  // => `hsl(300, 100%, 50%)`
```
<h4> <a href="#color-note">Color</a> ⇒ HSLA</h4>

```js
  const myHslaColor = toHsla('rgba(128, 0, 128, .75)');
  // => `hsla(300,100%,25%,1)`
```
<h2>🖌 Manipulating Colors</h2>
<h4>Lighten color by a <a href="#factor">factor</a></h4>

```js
  const myLighterColor = lighten('rgb(0, 0, 0)');
  // => `rgb(26, 26, 26)`
```
<h4>Darken <a href="#color-note">color</a> by a <a href="#factor-note">factor</a></h4>

```js
  const myDarkerColor = darken('rgb(255, 255, 255)', 0.5);
  // => `rgb(128, 128, 128)`
```
<h4>Saturate <a href="#color-note">color</a> by a <a href="#facto-note">factor</a></h4>

```js
  const mySaturatedColor = saturate('rgb(13, 13, 13)');
  // => `rgb(14, 11, 11)`
```
<h4>Desaturate <a href="#color-note">color</a> by a <a href="#factor-note">factor</a></h4>

```js
  const myDesaturatedColor = desaturate('hsla(10, 10%, 0%, 1)');
  // => `hsla(10, 0%, 0%)`
```
<h4>Opacify <a href="#color-note">color</a> by a <a href="#factor-note">factor</a></h4>

```js
  const myOpacifiedColor = opacify('rgba(255,255,255,0.5)', 0.2);
  // => `rgba(255,255,255,0.7)`
```
<h4>Transparentize <a href="#color-note">color</a> by a <a href="#factor-note">factor</a></h4>

```js
  const myTransparentizedColor = transparentize('rgba(255,255,255,0.5)', 0.2);
  // => `'rgba(255,255,255,0.3)'`
```
<h2>ℹ️ Notes</h2>
<a name="color-note"></a>
<p>
  <strong>Color</strong>
  - A color constitues a string or JSON representation of a color, where the color is of a <a href="#supported-type-note">supported type</a>.
</p>
<a name="factor-note"></a>
<p>
  <strong>Factor</strong>
  - A factor constitues a floating point between 0 and 1 denoting a percentage. Factors default to 0.1 (or 10%).
</p>
<a name="supported-type-note"></a>
<h4>Supported types</h4>
<ul>
  <li>RGB/A</li>
  <li>HSL/A</li>
  <li>Hex</li>
</ul>
<h2>🎉 Contributing</h2>
<p>
  Pull requests of any kind are welcome; whether it's adding a feature, improving documentation, or fixing a bug. However, there are some standard guidlines to follow when contributing code. Please read the following guide before opening a pull request
</p>
<strong>Guidelines for opening issues</strong>
<ul>
  <li>Check for a similar existing issue.</li>
  <li>Provide steps to reproduce the bug.</li>
  <li>Provide a log/result of the bug.</li>
</ul>
<strong>Guidelines for commiting code</strong>
<ul>
  <li>Provide documentation for new/improved features.</li>
  <li>Add exhaustive testing for new features.</li>
  <li>Follow linting rules and check build quality.</li>
</ul>
