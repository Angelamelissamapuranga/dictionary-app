import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        <li>
          <span>{props.synonyms}</span>
        </li>
        ;
      </ul>
    );
  } else {
    return null;
  }
}
