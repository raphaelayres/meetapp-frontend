import React, { useState, useRef, useEffect } from "react";
import { useField, Input } from "@rocketseat/unform";
import { toast } from "react-toastify";
import api from "~/services/api";

import { Container } from "./styles";
import { MdCameraAlt } from "react-icons/md";

export default function BannerInput() {
  const { defaultValue, registerField, fieldName } = useField("banner");

  const [file, setFile] = useState(defaultValue);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: fieldName,
        ref: ref.current,
        path: "dataset.file"
      });
    }
  }, [ref]); // eslint-disable-line

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
      <label htmlFor={fieldName}>
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
          name={fieldName}
          accept="image/*"
          onChange={handleChange}
          ref={ref}
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
