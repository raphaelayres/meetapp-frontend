import { createGlobalStyle } from "styled-components";

import "react-perfect-scrollbar/dist/css/styles.css";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`

  * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  *:focus{
    outline:0;
  }

  html, body, #root{
    height:100%;
  }

  body{
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font:14px Helvetica, Arial, sans-serif;
  }

  a{
    text-decoration:none;
  }

  ul{
    list-style:none;
  }

  button{
    cursor:pointer;
  }

  .Toastify__toast
  {
    border-radius:4px !important;
  }

  .Toastify__close-button{
    margin-right:0;
    margin-top:-5px;
  }

  .Toastify__toast--error
  {
    background:#BF253F !important;
  }

  .Toastify__toast--success
  {
    background:#28A869 !important;
  }

`;
