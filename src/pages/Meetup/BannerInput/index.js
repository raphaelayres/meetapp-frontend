import React, { useState, useEffect } from "react";
import { Input } from "@rocketseat/unform";
import { toast } from "react-toastify";
import { MdCameraAlt } from "react-icons/md";
import api from "~/services/api";

import { Container } from "./styles";

export default function BannerInput({ banner }) {
  const [file, setFile] = useState();

  useEffect(() => {
    setFile(banner);
    console.log("aki", banner);
  }, [banner]);

  async function handleChange(e) {
    const data = new FormData();

    data.append("file", e.target.files[0]);

    await api
      .post("files", data)
      .then(response => {
        const { file } = response.data;

        setFile(file);
      })
      .catch(err => {
        toast.error(
          "Erro no upload do banner! Formatos permitidos: jpg, jpeg, gif ou png e tamanho máximo de 5mb"
        );
      });
  }

  return (
    <Container>
      <label htmlFor="banner">
        {file ? (
          <img src={file.path} alt="banner" />
        ) : (
          <div>
            <MdCameraAlt size="54" color="rgba(255,255,255,0.3)" /> <br />
            Selecionar imagem
          </div>
        )}
        <input
          type="file"
          id="banner"
          name="banner"
          accept="image/*"
          onChange={handleChange}
        />
      </label>
      <Input
        type="hidden"
        id="file_id"
        name="file_id"
        value={file ? file.id : ""}
      />
    </Container>
  );
}
