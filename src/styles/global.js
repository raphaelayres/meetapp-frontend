import { createGlobalStyle } from "styled-components";
import { darken } from "polished";

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

  body, input, button, textarea, select{
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
    background:none;
    border:none;
  }

  button:disabled{
    cursor:not-allowed;
    opacity:0.5;
  }

  .disabled {
    cursor: not-allowed;
    opacity:0.5;
  }

  .disabled:active{
    pointer-events: none;
  }

  form {
    display: flex;
    flex-direction: column;

    input,select{
      min-height: 50px;
      padding: 0 15px;
    }

    textarea{padding:15px 15px;}

    input, textarea, select {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      width:100%;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 5px 0 15px;
    }

    > span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
    }

    > div > span{
      color: #fb6f91;
      align-self: flex-start;
      margin: 10px 0 0 0;
      display:flex;
    }

    button {
      background: #f94d6a;
      border: 0;
      border-radius: 4px;
      height: 42px;

      font-weight: bold;
      margin: 15px 0 0 auto;
      padding:0 20px;
      transition: background 0.2s;
      font-size: 16px;

      span {
        display: flex;
        align-items: center;
        color: #fff;
        justify-content: center;
      }

      svg {
        margin-right: 10px;
      }

      &:hover {
        background: ${darken(0.03, "#F94D6A")};
      }
    }
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
