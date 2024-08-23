import React from "react";
import { createGlobalStyle } from "styled-components";
import main from "../assets/fonts/Swomp-Sloppy.ttf";

const GlobalFont = createGlobalStyle`
   @font-face {
    
    font-family: "main";
    src:  url(${main}) format("truetype");
   }
    @font-face {
        font-family: "content";
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2406-2@1.0/PeoplefirstNeatLoudTTF.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    }
`;

export default GlobalFont;
