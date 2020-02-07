import React from "react";

const ErrorPage = ({ err }) => {
  console.log(err);
  if (!err) {
    return (
      <main>
        <br /> <h4>404 Page Not Found</h4>
      </main>
    );
  }
  return (
    <section>
      <br />
      <h4>
        Error: {err.status} {err.statusText}
      </h4>
      <br />
      <div>{err.data.msg}</div>
    </section>
  );
};

export default ErrorPage;
