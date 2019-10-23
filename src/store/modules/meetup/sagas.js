import { all, takeLatest, call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import api from "~/services/api";
import history from "~/services/history";
import {
  createMeetupSuccess,
  createMeetupFailer,
  updateMeetupSuccess,
  updateMeetupFailer
} from "./actions";

export function* createMeetup({ payload }) {
  try {
    const meetup = payload.data;
    const response = yield call(api.post, "mymeetups", meetup);

    toast.success("Meetup criado com sucesso!");

    yield put(createMeetupSuccess(response.data));

    history.push("/");
  } catch (error) {
    yield put(createMeetupFailer());
    toast.error("Erro ao criar meetup, confira seus dados!");
  }
}

export function* updateMeetup({ payload }) {
  try {
    const meetup = payload.data;
    const meetup_id = payload.id;
    const response = yield call(api.put, `mymeetups/${meetup_id}`, meetup);

    toast.success("Meetup atualizado com sucesso!");

    yield put(updateMeetupSuccess(response.data));

    history.push("/");
  } catch (error) {
    yield put(updateMeetupFailer());
    toast.error("Erro ao atualizar meetup, confira seus dados!");
  }
}

export default all([
  takeLatest("@meetup/CREATE_MEETUP_REQUEST", createMeetup),
  takeLatest("@meetup/UPDATE_MEETUP_REQUEST", updateMeetup)
]);
