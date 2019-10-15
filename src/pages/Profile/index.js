import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input } from "@rocketseat/unform";

import { Container } from "./styles";
import { updateProfileRequest } from "~/store/modules/user/actions";
import AvatarInput from "./AvatarInput";
import { signOut } from "~/store/modules/auth/actions";

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar" />
        <Input type="text" name="name" placeholder="Nome completo" />
        <Input type="email" name="email" placeholder="Seu endereço e-mail" />
        <hr />
        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmação de senha"
        />

        <button type="submit">Atualizar perfil</button>
      </Form>

      <button type="button" onClick={() => handleSignOut()}>
        Sair do Meetapp
      </button>
    </Container>
  );
}
