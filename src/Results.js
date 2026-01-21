import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
  if (!props.results) {
    return null;
  }

  const meanings = props.results.meanings || [];
  const phonetic = props.results.phonetic || [];

  return (
    <div className="Results">
      <section>
        <h2>{props.results.word}</h2>
        {props.results.phonetics &&
          props.results.phonetics.map((phonetic, index) => (
            <Phonetics key={index} phonetic={phonetic} />
          ))}
      </section>

      {meanings.map((meaning, index) => (
        <section key={index}>
          <Meaning meaning={meaning} />
        </section>
      ))}
    </div>
  );
}
