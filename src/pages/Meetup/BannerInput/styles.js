import styled from "styled-components";

export const Container = styled.div`
  align-self: center;
  margin-bottom: 15px;
  width: 100%;

  input {
    display: none;
  }

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
      width: 100%;
      object-fit: cover;
    }

    div {
      color: rgba(255, 255, 255, 0.3);
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    div > svg {
      width: 100%;
    }
  }
`;
