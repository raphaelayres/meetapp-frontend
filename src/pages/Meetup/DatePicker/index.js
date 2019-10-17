import React, { useRef, useEffect, useState } from "react";
import ReactDatePicker, { registerLocale } from "react-datepicker";

import pt from "date-fns/locale/pt";

import { useField } from "@rocketseat/unform";

import "react-datepicker/dist/react-datepicker.css";
import { parseISO } from "date-fns";

registerLocale("pt", pt);

export default function DatePicker({ name, value }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const [startDate, setStartDate] = useState(null);

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

  useEffect(() => {
    if (defaultValue) {
      setStartDate(parseISO(defaultValue));
    }
  }, [defaultValue]);

  return (
    <>
      <ReactDatePicker
        name={fieldName}
        selected={startDate}
        onChange={datetime => setStartDate(datetime)}
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
