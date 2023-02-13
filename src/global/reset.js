import { createGlobalStyle } from "styled-components";

export const ResetCss = createGlobalStyle`

*,
::before,
::after {
  box-sizing: border-box;
  border-style: solid;
  border-width: 0;
}




html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -webkit-tap-highlight-color: transparent; /* 3*/
}




body {
  margin: 0;
  font-family:'Dancing Script', sans-serif;
}


main {
  display: block;
}

/* Vertical rhythm */
/* ============================================ */

p,
table,
blockquote,
address,
pre,
iframe,
form,
figure,
dl {
  margin: 0;
}

/* Headings */
/* ============================================ */

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
  margin: 0;
}

/* Lists (enumeration) */
/* ============================================ */

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

/* Lists (definition) */
/* ============================================ */

dt {
  font-weight: bold;
}

dd {
  margin-left: 0;
}

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
  border-top-width: 1px;
  margin: 0;
  clear: both;
  color: inherit;
}



pre {
  font-family: monospace, monospace; /* 1 */
  font-size: inherit; /* 2 */
}

address {
  font-style: inherit;
}

a {
  background-color: transparent;
  text-decoration: none;
  color: inherit;
}



abbr[title] {
  text-decoration: underline dotted; /* 2 */
}



b,
strong {
  font-weight: bolder;
}



code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: inherit; /* 2 */
}



small {
  font-size: 80%;
}



sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}



svg,
img,
embed,
object,
iframe {
  vertical-align: bottom;
}




button,
input,
optgroup,
select,
textarea {
  -webkit-appearance: none; /* 1 */
  appearance: none;
  vertical-align: middle;
  color: inherit;
  font: inherit;
  background: transparent;
  padding: 0;
  margin: 0;
  border-radius: 0;
  text-align: inherit;
  text-transform: inherit; /* 2 */
}



button,
[type="button"],
[type="reset"],
[type="submit"] {
  cursor: pointer;
}

button:disabled,
[type="button"]:disabled,
[type="reset"]:disabled,
[type="submit"]:disabled {
  cursor: default;
}



:-moz-focusring {
  outline: auto;
}

select:disabled {
  opacity: inherit;
}



option {
  padding: 0;
}



fieldset {
  margin: 0;
  padding: 0;
  min-width: 0;
}

legend {
  padding: 0;
}



progress {
  vertical-align: baseline;
}



textarea {
  overflow: auto;
}



[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}



[type="search"] {
  outline-offset: -2px; /* 1 */
}



[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}



::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}


[type="number"] {
  -moz-appearance: textfield;
}

/**
 * Clickable labels
 */

label[for] {
  cursor: pointer;
}



details {
  display: block;
}



summary {
  display: list-item;
}



[contenteditable]:focus {
  outline: auto;
}


table {
  border-color: inherit; /* 1 */
  border-collapse: collapse;
}

caption {
  text-align: left;
}

td,
th {
  vertical-align: top;
  padding: 0;
}

th {
  text-align: left;
  font-weight: bold;
}



    

`

