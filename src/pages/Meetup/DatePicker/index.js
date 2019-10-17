import React, { useRef, useEffect, useState } from "react";
import ReactDatePicker, {
  registerLocale,
  setDefaultLocale
} from "react-datepicker";

import pt from "date-fns/locale/pt";

import { useField } from "@rocketseat/unform";

import "react-datepicker/dist/react-datepicker.css";

registerLocale("pt", pt);

export default function DatePicker({ name }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: "props.selected",
      clearValue: pickerRef => {
        pickerRef.clear();
      }
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      <ReactDatePicker
        name={fieldName}
        selected={selected}
        onChange={date => setSelected(date)}
        ref={ref}
        placeholderText="Data do meetup"
        locale="pt"
        showTimeSelect
        timeFormat="p"
        timeIntervals={15}
        dateFormat="Pp"
      />
      {error && <span>{error}</span>}
    </>
  );
}
