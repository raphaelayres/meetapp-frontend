import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input } from "@rocketseat/unform";
import { MdAddCircleOutline } from "react-icons/md";

import { Container } from "./styles";
import { updateProfileRequest } from "~/store/modules/user/actions";

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
        <Input type="text" name="name" placeholder="Nome completo" />
        <Input type="email" name="email" placeholder="Seu endereço e-mail" />
        <hr />
        <Input type="password" name="oldPassword" placeholder="Senha atual" />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmação de senha"
        />

        <button type="submit">
          <span>
            <MdAddCircleOutline size={20} color="#fff" /> Salvar perfil
          </span>
        </button>
      </Form>
    </Container>
  );
}
