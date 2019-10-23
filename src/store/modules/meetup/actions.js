export function createMeetupRequest(data) {
  return {
    type: "@meetup/CREATE_MEETUP_REQUEST",
    payload: { data }
  };
}
export function createMeetupSuccess(meetup) {
  return {
    type: "@meetup/CREATE_MEETUP_SUCCESS",
    payload: { meetup }
  };
}
export function createMeetupFailer() {
  return {
    type: "@meetup/CREATE_MEETUP_FAILER"
  };
}

export function updateMeetupRequest(data, id) {
  return {
    type: "@meetup/UPDATE_MEETUP_REQUEST",
    payload: { data, id }
  };
}
export function updateMeetupSuccess(meetup) {
  return {
    type: "@meetup/UPDATE_MEETUP_SUCCESS",
    payload: { meetup }
  };
}
export function updateMeetupFailer() {
  return {
    type: "@meetup/UPDATE_MEETUP_FAILER"
  };
}

export function cancelMeetupRequest(data, id) {
  return {
    type: "@meetup/CANCEL_MEETUP_REQUEST",
    payload: { data }
  };
}
export function cancelMeetupSuccess(meetup) {
  return {
    type: "@meetup/CANCEL_MEETUP_SUCCESS",
    payload: { meetup }
  };
}
export function cancelMeetupFailer() {
  return {
    type: "@meetup/CANCEL_MEETUP_FAILER"
  };
}
