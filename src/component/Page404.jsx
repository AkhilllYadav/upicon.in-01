import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Page404() {
  return (
    <section className="latest-news mb-5">
      <div className="container d-flex flex-column align-items-center justify-content-center text-center py-5">
        <h1 className="display-1 fw-bold text-danger">404</h1>
        <p className="fs-5 text-dark mb-3">Oops! The page you're looking for doesn't exist.</p>
        <a href="/" className="btn btn-warning">Go Back Home</a>
      </div>
    </section>
  );
}