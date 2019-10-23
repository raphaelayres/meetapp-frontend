import styled, { keyframes } from "styled-components";
import { darken } from "polished";

const bounceIn = keyframes`
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  60% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
`;

export const Container = styled.div`
  display: ${props => (props.open && props.open === true ? "flex" : "none")};
  width: 100%;
  min-height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  z-index: 9999;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
`;
export const Box = styled.div`
  min-width: 300px;
  max-width: 90%;
  background: #22202c;
  border-radius: 4px;
  margin: auto auto;
  box-shadow: 3px 3px 15px 5px #000;
  animation: ${bounceIn} 0.3s 0s both;
`;
export const Title = styled.h2`
  font-size: 20px;
  color: #eee;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  button {
    justify-items: end;
    color: #ccc;
  }
`;

export const Body = styled.div`
  font-size: 14px;
  color: #fff;
  padding: 15px;
`;
export const Footer = styled.div`
  padding: 15px;
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
`;
export const Button = styled.button`
  padding: 8px 20px;
  font-weight: bold;
  border-radius: 4px;
  margin-left: 5px;
  background: ${props => (props.bg ? props.bg : "transparent")};
  color: ${props => (props.color ? props.color : "#fff")};

  &:hover {
    background: ${props => (props.bg ? darken(0.03, props.bg) : "transparent")};
  }
`;
