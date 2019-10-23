import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { MdDeleteForever, MdEdit, MdDateRange, MdPlace } from "react-icons/md";
import { format, parseISO } from "date-fns";
import pt from "date-fns/locale/pt";
import api from "~/services/api";
import {
  Container,
  Banner,
  Description,
  Datetime,
  Localization
} from "./styles";
import Modal from "~/components/Modal";
import PageLoading from "~/components/PageLoading";
import { cancelMeetupRequest } from "~/store/modules/meetup/actions";

export default function Meetup({ match }) {
  const [meetup, setMeetup] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`mymeetups/${match.params.id}`);

      const { data } = response;

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

      setMeetup(meetup);
      setLoading(false);
    }
    loadMeetup();
  }, [match.params.id]);

  const dispatch = useDispatch();

  function handleCancelMeetup() {
    dispatch(cancelMeetupRequest(meetup));
    setOpen(false);
  }

  return (
    <Container>
      <PageLoading loading={loading} />
      <Modal open={open} setOpen={setOpen} action={handleCancelMeetup} />
      <header>
        <h1>{meetup.title}</h1>

        <div>
          <Link
            to={`/meetup/${meetup.id}/edit`}
            className={meetup.past ? "disabled" : ""}
            title={
              meetup.past
                ? "Não é possível editar um Meetup que já ocorreu."
                : "Editar Meetup"
            }
          >
            <button className="btn-edit" type="button" disabled={!!meetup.past}>
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
            disabled={!!meetup.past}
            title={
              meetup.past
                ? "Não é possível cancelar um Meetup que já ocorreu."
                : "Cancelar Meetup"
            }
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
