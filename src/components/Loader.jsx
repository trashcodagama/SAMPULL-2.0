import React from "react";

import loader from "../assets/loader.svg";

const Loader = () => {
  return (
    <div>
      <img src={loader} alt="loader" />
      <p>
        Transaction is in progress <br /> Please wait...
      </p>
    </div>
  );
};

export default Loader;
