import styled from "styled-components";
import { darken } from "polished";

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-180deg, #22202c, #402845);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 50px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      font-size: 18px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
    }

    button {
      background: #f94d6a;
      border: 0;
      border-radius: 4px;
      height: 50px;
      color: #fff;
      font-weight: bold;
      margin: 5px 0 0;
      transition: background 0.2s;
      font-size: 18px;

      &:hover {
        background: ${darken(0.03, "#F94D6A")};
      }
    }

    a {
      color: #fff;
      margin-top: 25px;
      font-size: 16px;
      opacity: 0.8;
      font-weight: bold;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
