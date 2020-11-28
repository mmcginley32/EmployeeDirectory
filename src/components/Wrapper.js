import React from "react";
import "../styles/Wrapper.css";


//wrapper for all child elements
function Wrapper({ children }) {
  return <div className="wrapper">{children}</div>;
}

//export
export default Wrapper;