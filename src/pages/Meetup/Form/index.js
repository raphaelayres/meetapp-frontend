import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Container } from "./styles";
import { MdAddCircleOutline } from "react-icons/md";
import api from "~/services/api";
import { format, parseISO } from "date-fns";
import pt from "date-fns/locale/pt";
import { Form, Input } from "@rocketseat/unform";
import BannerInput from "../BannerInput";
import DatePicker from "../DatePicker";

export default function MeetupForm({ match }) {
  const [meetup, setMeetup] = useState([]);

  useEffect(() => {
    async function loadMeetup() {
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
        banner: data.banner.path,
        datetimeFormatted
      };

      console.log(meetup);

      setMeetup(meetup);
    }
    loadMeetup();
  }, [match.params.id]);

  const dispatch = useDispatch();

  function handleSubmit(data) {
    // dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={meetup} onSubmit={handleSubmit}>
        <BannerInput name="banner" />
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
