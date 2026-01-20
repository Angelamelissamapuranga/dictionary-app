import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (!props.results) {
    return null; // no results yet
  }

  const meanings = props.results.meanings || []; // safely fallback

  return (
    <div className="Results">
      <h2>{props.results.word}</h2>
      {meanings.map((meaning, index) => (
        <div key={index}>
          <Meaning meaning={meaning} />
        </div>
      ))}
    </div>
  );
}
