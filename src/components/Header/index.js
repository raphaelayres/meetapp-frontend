import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import logo from "~/assets/logo.svg";

import { Container, Content, Profile } from "./styles";

import { signOut } from "~/store/modules/auth/actions";

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  const profile = useSelector(state => state.user.profile);
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="Meetapp" />
          </Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
          </Profile>
          <button type="button" onClick={() => handleSignOut()}>
            Sair
          </button>
        </aside>
      </Content>
    </Container>
  );
}
