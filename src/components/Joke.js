import { useState, useEffect } from "react";
export default function Joke() {
  // Declare state variable joke + setter
  const [jokeState, setJokeState] = useState();
  // Declare state variable nextIdState + setter
  const [nextIdState, setNextIdState] = useState(0);
  // use effect to encapsulate side effect (fetch)
  useEffect(() => {
    // Declare async function to fetch data from bad jokes API
    async function startFetching() {
      const response = await fetch(
        `https://example-apis.vercel.app/api/bad-jokes/${nextIdState}`
      );
      const data = await response.json();
      // set state variable
      setJokeState(data);
    }
    // trigger the fetch
    startFetching();
  }, [nextIdState]); // <- dependency array: variable change triggers useEffect again
  // if joke still undefined (loading takes a while), return nothing
  if (!jokeState) {
    return null;
  }

  return (
    <>
      <h1>{jokeState.joke}</h1>
      {/* add click handler to change nextIdState (which again triggers our useEffect*/}
      <button onClick={() => setNextIdState(jokeState.nextId)} type="button">
        Next Joke
      </button>
    </>
  );
}
