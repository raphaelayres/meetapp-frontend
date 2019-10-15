import styled from "styled-components";

export const Container = styled.div`
  align-self: center;
  margin-bottom: 15px;

  label {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid rgba(255, 255, 255, 0.3);
    background: #eee;
    text-align: center;

    &:hover {
      opacity: 0.7;
    }

    img {
      width: auto;
      height: 100%;
      object-fit: cover;
    }

    input {
      display: none;
    }
  }
`;
