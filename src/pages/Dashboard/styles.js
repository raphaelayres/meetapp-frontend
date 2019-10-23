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
    }

    button {
      background: #f94d6a;
      border: 0;
      border-radius: 4px;
      height: 42px;

      font-weight: bold;
      margin: 0 0 0 auto;
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

  ul {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-top: 45px;
  }
`;

export const Meetup = styled.li`
  padding: 18px 15px 18px 30px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.1);
  margin-bottom:10px;
  justify-content: space-between;
  display:flex;
  align-items:center;

  /* opacity: ${props => (props.past ? 0.6 : 1)}; */

  strong {
    display: block;
    /* color: ${props => (props.available ? "#999" : "#7159c1")}; */
    color:#fff;
    font-size: 18px;
  }
  span {
    display: block;
    color:rgba(255,255,255,0.6)
    /* color: ${props => (props.available ? "#999" : "#333")}; */
  }

  div {
    display:flex;
    align-items:center;
  }

  div span{
    font-size:16px;
    margin-right:25px;
  }

`;
