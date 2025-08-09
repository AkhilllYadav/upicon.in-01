import React from "react";
import { BeatLoader  } from "react-spinners";

const Loader = ({ loading = true, size = 10, color = "#3EB7BB", height = "10px" }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height }}
    >
      <BeatLoader color={color} loading={loading} size={size} />
    </div>
  );
};

export default Loader;
