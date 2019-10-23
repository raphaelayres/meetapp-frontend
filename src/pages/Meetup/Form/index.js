import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Container } from "./styles";
import { MdAddCircleOutline } from "react-icons/md";
import api from "~/services/api";
import { format, parseISO } from "date-fns";
import pt from "date-fns/locale/pt";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import BannerInput from "../BannerInput";
import DatePicker from "../DatePicker";
import {
  createMeetupRequest,
  updateMeetupRequest
} from "~/store/modules/meetup/actions";

const schema = Yup.object().shape({
  file_id: Yup.string().required("O banner é obrigatório"),
  title: Yup.string().required("O título é obrigatório"),
  description: Yup.string().required("A descrição é obrigatória"),
  datetime: Yup.mixed().required("A data do meetup é obrigatória"),
  localization: Yup.string().required("A localização é obrigatória")
});

export default function MeetupForm({ match }) {
  const [meetup, setMeetup] = useState([]);

  useEffect(() => {
    async function loadMeetup() {
      if (match.params.id) {
        const response = await api.get(`mymeetups/${match.params.id}`);

        const data = response.data;

        const datetimeFormatted = format(
          parseISO(data.datetime),
          "d 'de' MMMM, 'às' HH'h'",
          {
            locale: pt
          }
        );

        const meetup = {
          ...data,
          datetimeFormatted
        };

        console.log(meetup);

        setMeetup(meetup);
      }
    }
    loadMeetup();
  }, [match.params.id]);

  const dispatch = useDispatch();

  function handleSubmit(data) {
    if (meetup) {
      dispatch(updateMeetupRequest(data, match.params.id));
    } else {
      dispatch(createMeetupRequest(data));
    }
  }

  return (
    <Container>
      <Form initialData={meetup} schema={schema} onSubmit={handleSubmit}>
        <BannerInput name="banner" banner={meetup.banner} />
        <Input type="text" name="title" placeholder="Título do Meetup" />
        <Input
          multiline
          rows="8"
          name="description"
          placeholder="Descrição completa"
        />
        <DatePicker name="datetime" />
        <Input type="text" name="localization" placeholder="Localização" />
        <button type="submit">
          <span>
            <MdAddCircleOutline size={20} color="#fff" /> Salvar meetup
          </span>
        </button>
      </Form>
    </Container>
  );
}
