import React, { useState } from "react";

export default function Search(props) {
  const [city, setCity] = useState("");

  function handleChange(event) {
    setCity(event.target.value);
  }

  function submit(event) {
    event.preventDefault();
    props.refresh(city);
  }

  return (
    <form className="float-left" onSubmit={submit}>
      <input
        type="text"
        placeholder="Enter a city"
        autoComplete="off"
        autoFocus="on"
        onChange={handleChange}
      />
      <input type="submit" value="Search" className="btn btn-primary" />
    </form>
  );
}
