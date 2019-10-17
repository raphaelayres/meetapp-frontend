import React, { useState, useRef, useEffect } from "react";
import { useField } from "@rocketseat/unform";
import api from "~/services/api";

import { Container } from "./styles";
import { MdCameraAlt } from "react-icons/md";

export default function BannerInput() {
  const { defaultValue, registerField } = useField("banner");

  const [file, setFile] = useState(defaultValue);

  console.log("file", file);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: "banner",
        ref: ref.current,
        path: "dataset.file"
      });
    }
  }, [ref]); // eslint-disable-line

  async function handleChange(e) {
    const data = new FormData();

    data.append("file", e.target.files[0]);

    const response = await api.post("files", data);

    const { file } = response.data;

    setFile(file);
  }

  return (
    <Container>
      <label htmlFor="banner">
        {file ? (
          <img src={file} alt="banner" />
        ) : (
          <div>
            <MdCameraAlt size="54" color="rgba(255,255,255,0.3)" /> <br />
            Selecionar imagem
          </div>
        )}
        <input
          type="file"
          id="banner"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
