import React from "react";
import { useSelector } from "react-redux";
import Form from "./Form";
import Message from "./Message";

const Existing = () => {
  const fetched = useSelector((state) => state.checkout.fetched);
  return <>{fetched ? <Message /> : <Form />}</>;
};

export default Existing;
