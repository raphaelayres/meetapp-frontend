import styled from "styled-components";

export const Container = styled.div`
  align-self: center;
  margin-bottom: 15px;
  width: 100%;

  label {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    width: 100%;
    flex: 1;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.4);
    text-align: center;
    border-radius: 4px;

    &:hover {
      opacity: 0.8;
    }

    img {
      width: auto;
      height: 100%;
      object-fit: cover;
    }

    input {
      display: none;
    }

    div {
      color: rgba(255, 255, 255, 0.3);
    }
  }
`;
