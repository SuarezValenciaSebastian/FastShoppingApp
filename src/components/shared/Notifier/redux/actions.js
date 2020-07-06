export const NOTIFIER_NOTIFICATION__PUSH = "NOTIFIER_NOTIFICATION__PUSH";
export const NOTIFIER_NOTIFICATION__DISMISS = "NOTIFIER_NOTIFICATION__DISMISS";

export const pushNotification = (payload) => ({
  type: NOTIFIER_NOTIFICATION__PUSH,
  payload,
});

export const dismissNotification = (payload) => ({
  type: NOTIFIER_NOTIFICATION__DISMISS,
  payload,
});
