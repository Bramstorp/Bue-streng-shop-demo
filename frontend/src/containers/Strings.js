import React, { useState } from "react";
import StringsForm from "../components/StringsForm";

const Strings = () => {
  const [strings, setStrings] = useState([])
  return (
    <div className="pt-5">
      <h1>Streng Opretter</h1>
      <StringsForm />
    </div>
  );
}

export default Strings;