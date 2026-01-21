import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          <li key={index}>
            <span>{synonym}</span>
          </li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
