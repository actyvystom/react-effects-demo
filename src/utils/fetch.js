import { useState, useEffect } from "react";

export function useFetch(url) {
  // Declare state variable joke + setter
  const [data, setData] = useState();
  useEffect(() => {
    // Declare async function to fetch data from bad jokes API
    async function startFetching() {
      const response = await fetch(url);
      const dataJson = await response.json();
      // set state variable
      setData(dataJson);
    }
    // trigger the fetch
    startFetching();
  }, [url]);

  return data;
}

export function useJoke() {
  // Declare state variable nextIdState + setter
  const [id, setId] = useState(0);
  // use our fresh useFetch hook to get the joke data
  const joke = useFetch(`https://example-apis.vercel.app/api/bad-jokes/${id}`);
  // declare our handler to set our next joke id
  function handleNextJoke() {
    setId(joke.nextId);
  }
  // return joke and handler in object shorthand notation (short way when key and value have the same naming)
  return { joke, handleNextJoke };
}
