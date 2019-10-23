import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Banner,
  Description,
  Datetime,
  Localization
} from "./styles";
import { MdDeleteForever, MdEdit, MdDateRange, MdPlace } from "react-icons/md";
import api from "~/services/api";
import { format, parseISO } from "date-fns";
import pt from "date-fns/locale/pt";
import Modal from "~/components/Modal";
import PageLoading from "~/components/PageLoading";

export default function Meetup({ match }) {
  const [meetup, setMeetup] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

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
        banner_url: data.banner.path,
        datetimeFormatted
      };

      console.log(meetup);

      setMeetup(meetup);
      setLoading(false);
    }
    loadMeetup();
  }, [match.params.id]);

  return (
    <Container>
      <PageLoading loading={loading} />
      <Modal open={open} setOpen={setOpen} />
      <header>
        <h1>{meetup.title}</h1>

        <div>
          <Link to={`/meetup/${meetup.id}/edit`}>
            <button className="btn-edit" type="button">
              <span>
                <MdEdit size={20} color="#fff" />
                Editar
              </span>
            </button>
          </Link>

          <button
            className="btn-cancel"
            type="button"
            onClick={() => setOpen(true)}
          >
            <span>
              <MdDeleteForever size={20} color="#fff" />
              Cancelar
            </span>
          </button>
        </div>
      </header>

      <div>
        <Banner src={meetup.banner_url} alt="banner" />

        <Description>{meetup.description}</Description>
        <div className="footer">
          <Datetime>
            <MdDateRange size={20} /> {meetup.datetimeFormatted}
          </Datetime>
          <Localization>
            <MdPlace size={20} /> {meetup.localization}
          </Localization>
        </div>
      </div>
    </Container>
  );
}
