import {createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html, body, ul, li, ol, dl, dd, dt, p, h1, h2, h3, h4, h5, h6, form, fieldset, legend, img { margin:0; padding:0; touch-action:pan-y}

fieldset, c{ border:none; }

img{display: block;}

address, caption, cite, code, dfn, th, var { font-style:normal; font-weight:normal; }

ul, ol ,li{ list-style:none; }

body { color:#333;  background:#fff;}

a { color:#666; text-decoration:none; }

.clear{clear:both}
*{box-sizing:border-box}
body,html,#root{
    height: 100%;
    overflow: hidden;
    font-size:31.25vw;
}
`