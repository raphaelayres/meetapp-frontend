import React, { useState, useRef, useEffect } from "react";
import { useField } from "@rocketseat/unform";
import api from "~/services/api";

import { Container } from "./styles";

export default function AvatarInput() {
  const { defaultValue, registerField } = useField("avatar");

  const [file, setFile] = useState(defaultValue);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: "avatar",
        ref: ref.current,
        path: "dataset.file"
      });
    }
  }, [ref]); // eslint-disable-line

  async function handleChange(e) {
    const data = new FormData();

    data.append("avatar", e.target.files[0]);

    const response = await api.post("users/avatar", data);

    const { avatar } = response.data;

    setFile(avatar);
  }
  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={file || "https://api.adorable.io/avatars/120/abott@adorable.png"}
          alt="avatar"
        />
        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
