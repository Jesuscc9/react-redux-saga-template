import { useEffect } from "react";
import { ToastContainer, toast, ToastContainerProps } from "react-toastify";
import { useSelector } from "react-redux";
import { RootStateType } from "../../store";
import "react-toastify/dist/ReactToastify.css";

export const Alerts = () => {

	const newAlert = useSelector((state: RootStateType) => state.alerts);

  useEffect(() => {
    const { type, message } = newAlert;
    if(!message || message.length < 1) return;
    toast(message, { type });
  }, [newAlert]);

  const toastProps: ToastContainerProps = {
    position: "top-right",
    autoClose: 6000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
  };

  return <ToastContainer {...toastProps} />;
};
