import React from "react";
import { createGlobalStyle } from "styled-components";

import { Container, Box, Title, Body, Footer, Button } from "./styles";
import { MdClose } from "react-icons/md";

export default function Modal({ open, setOpen }) {
  const GlobalStyle = createGlobalStyle`
  body {
    overflow-y:${props => (props.scroll ? "scroll" : "hidden")};
  }
`;

  return (
    <Container open={open}>
      <GlobalStyle scroll={!open} />
      <Box>
        <Title>
          Cancelar meetup
          <button onClick={() => setOpen(false)}>
            <MdClose size={16} />
          </button>
        </Title>
        <Body>Tem certeza de que pretende cancelar este meetup?</Body>
        <Footer>
          <Button onClick={() => setOpen(false)}>Não</Button>
          <Button color="#fff" bg="#f94d6a">
            Sim
          </Button>
        </Footer>
      </Box>
    </Container>
  );
}
