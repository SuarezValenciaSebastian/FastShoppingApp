import {
  NOTIFIER_NOTIFICATION__PUSH,
  NOTIFIER_NOTIFICATION__DISMISS,
} from "./actions";

const initialState = {
  notifications: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case NOTIFIER_NOTIFICATION__PUSH:
      return { ...state, notifications: [...state.notifications, payload] };
    case NOTIFIER_NOTIFICATION__DISMISS:
      return { ...state, notifications: [] };

    default:
      return state;
  }
};
