import React from "react";

const ErrorPage = ({ err }) => {
  console.log(err.response);
  return <p>in error page ... </p>;
};

export default ErrorPage;
