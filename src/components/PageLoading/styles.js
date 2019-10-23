import styled, { keyframes } from "styled-components";

const bounceIn = keyframes`
  0% {
    transform: scale(0.6);
  }
  60% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export const Container = styled.div`
  display: ${props =>
    props.loading && props.loading === true ? "flex" : "none"};
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
export const Loading = styled.div`
  border-radius: 4px;
  margin: auto auto;
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
export const Logo = styled.img`
  display: flex;
  justify-self: center;
  margin: 0 auto 15px auto;
  width: 32px;
  height: 32px;
  animation: ${bounceIn} 0.5s infinite linear;
`;
