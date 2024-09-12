import React, { useState } from "react";
import api from "../api";

const Form = () => {
  const [data, setData] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await api.post("/getData", { data: data });
    console.log(res.data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setData(e.target.value)} />
        <input type="submit" value="저장" />
      </form>
    </div>
  );
};

export default Form;
