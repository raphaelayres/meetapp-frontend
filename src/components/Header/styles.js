import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.3);
`;

export const Content = styled.div`
  height: 92px;
  width: 940px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      width: 31px;
      height: 32px;
    }
    a {
      font-weight: bold;
      color: #fff;
    }
  }

  aside {
    display: flex;
    align-items: center;

    button {
      background: #f94d6a;
      border: 0;
      border-radius: 4px;
      height: 42px;
      color: #fff;
      padding: 0 21.5px;
      transition: background 0.2s;
      font-size: 16px;
      font-weight: bold;

      &:hover {
        background: ${darken(0.03, "#F94D6A")};
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  div {
    text-align: right;
    margin-right: 30px;

    strong {
      display: block;
      color: #fff;
      font-size: 14px;
    }
    a {
      display: block;
      color: #999999;
      font-size: 14px;
      margin-top: 2px;
    }
  }
  .box-img {
    width: 40px;
    height: 40px;
    overflow: hidden;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    object-fit: cover;
    width: auto;
    height: 100%;
  }
`;
