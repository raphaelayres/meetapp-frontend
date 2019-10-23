import React from "react";
import { createGlobalStyle } from "styled-components";

import logo from "~/assets/logo.svg";

import { Container, Loading, Logo } from "./styles";

export default function PageLoading({ loading }) {
  const GlobalStyle = createGlobalStyle`
    body {
      overflow-y:${props => (props.scroll ? "scroll" : "hidden")};
    }
  `;

  return (
    <Container loading={loading}>
      <GlobalStyle scroll={!loading} />
      <Loading>
        <Logo src={logo} />
        Loading...
      </Loading>
    </Container>
  );
}
