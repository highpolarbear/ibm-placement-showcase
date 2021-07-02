import { createGlobalStyle } from "styled-components";

const regular = require("./coolvetica_regular.ttf");
const light = require("./coolvetica_light.ttf");
const bold = require("./coolvetica_extra_light.ttf");

export default createGlobalStyle`
  @font-face {
    font-family: 'light';
    src: local('light'), url(${light}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'regular';
    src: local('regular'), url(${regular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }  

  @font-face {
    font-family: 'bold';
    src: local('bold'), url(${bold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  body {
    font-family: regular
  }
`;
