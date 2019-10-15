import React, { useState, useMemo, useEffect } from "react";

import { Container, Meetup } from "./styles";
import { MdAddCircleOutline, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";
import api from "~/services/api";

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get("mymeetups");

      console.log(response.data);

      const data = response.data.map(meetup => meetup);

      setMeetups(data);
    }
    loadMeetups();
  }, []);

  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>
        <Link to="/meetups">
          <button type="button" onClick={() => {}}>
            <span>
              <MdAddCircleOutline size={20} color="#fff" />
              Novo meetup
            </span>
          </button>
        </Link>
      </header>

      <ul>
        {meetups.map(meetup => (
          <Meetup past key={meetup.id}>
            <strong>{meetup.title}</strong>
            <div>
              <span>{meetup.datetime}</span>
              <Link to="/meetups">
                <a type="button" onClick={() => {}}>
                  <MdChevronRight size={20} color="#fff" />
                </a>
              </Link>
            </div>
          </Meetup>
        ))}
      </ul>
    </Container>
  );
}
