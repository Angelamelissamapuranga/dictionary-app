import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
    console.log(response.data);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiKey = "40bdb8c3a26579atfoa8a2d376def906";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey =
      "6KJDehgPYBOjgbK3LiATu9YNaPOKgcJoRllKYKKNp9s6X3SdfCWEGDw1";

    const pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;

    axios
      .get(pexelsUrl, {
        headers: {
          Authorization: pexelsApiKey,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function load() {
    setLoaded(true);
    search();
  }

  function handleSubmit(event) {
    event.preventDefault();
    handlePexelsResponse();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word would you like to look up</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            Suggested words: accumulate, fear, yoga, love...
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
