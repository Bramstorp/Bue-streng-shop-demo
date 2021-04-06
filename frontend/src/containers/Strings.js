import React, { useState } from "react";
import StringsForm from "../components/StringsForm";

const Strings = () => {
  const [strings, setStrings] = useState([])
  return (
    <div className="pt-5">
      <h5>Streng Opretter</h5>
      <StringsForm />
    </div>
  );
}

export default Strings;