import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 940px;
  margin: 0 auto;
  padding: 50px 0;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;

    h1 {
      font-size: 32px;
      color: #fff;
      text-transform: capitalize;
    }

    button.btn-cancel {
      background: #f94d6a;
      &:hover {
        background: ${darken(0.03, "#F94D6A")};
      }
    }

    button.btn-edit {
      margin-right: 15px;
      background: #4dbaf9;
      &:hover {
        background: ${darken(0.03, "#4DBAF9")};
      }
    }

    button {
      border: 0;
      border-radius: 4px;
      height: 42px;

      font-weight: bold;
      margin: 0 0 0 auto;
      transition: background 0.2s;
      font-size: 16px;
      padding: 0 20px;

      span {
        display: flex;
        align-items: center;
        color: #fff;
        justify-content: center;
      }

      svg {
        margin-right: 10px;
      }
    }
  }

  div.footer {
    display: flex;
    align-items: center;
    margin-top: 30px;
  }
`;

export const Banner = styled.img`
  margin-top: 47px;
  height: 300px;
  width: 100%;
  object-fit: cover;
  display: flex;
`;

export const Description = styled.div`
  width: 100%;
  margin-top: 25px;
  color: #fff;
  font-size: 18px;
  line-height: 32px;
  white-space: pre-line;
`;
export const Datetime = styled.div`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  margin-right: 30px;
  align-items: center;
  svg {
    margin-right: 10px;
    color: rgba(255, 255, 255, 0.6);
  }
`;
export const Localization = styled.div`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  svg {
    margin-right: 10px;
    color: rgba(255, 255, 255, 0.6);
  }
`;
