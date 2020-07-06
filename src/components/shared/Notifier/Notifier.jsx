import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { dismissNotification } from "./redux/actions";

const Notifier = () => {
  const notifications = useSelector((state) => state.notifier.notifications);

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    notifications.forEach((notification) => {
      enqueueSnackbar(notification);
      dismissNotification();
    });
  }, [notifications, enqueueSnackbar]);

  return null;
};

export default Notifier;
