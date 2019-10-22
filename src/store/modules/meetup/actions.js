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

export function updateMeetupRequest(data) {
  return {
    type: "@meetup/UPDATE_MEETUP_REQUEST",
    payload: { data }
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
