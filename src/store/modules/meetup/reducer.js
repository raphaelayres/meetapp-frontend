import produce from "immer";

const INITIAL_STATE = {
  meetup: null
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@user/CREATE_MEETUP_SUCCESS": {
        draft.meetup = action.payload.meetup;
        break;
      }

      case "@user/UPDATE_MEETUP_SUCCESS": {
        draft.meetup = action.payload.meetup;
        break;
      }

      default:
    }
  });
}
