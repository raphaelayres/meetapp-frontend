import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 50px;
      padding: 0 15px;
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

    button {
      background: #f94d6a;
      border: 0;
      border-radius: 4px;
      height: 42px;

      font-weight: bold;
      margin: 15px 0 0 auto;
      transition: background 0.2s;
      width: 162px;
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
`;
