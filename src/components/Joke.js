import { useJoke } from "../utils/fetch";

export default function Joke() {
  // deconstruct the values our custom useJoke hook is returning
  const { joke, handleNextJoke } = useJoke();
  // show a message during data load
  if (!joke) {
    return <h1>Loading...</h1>;
  }
  // use our values returned by our custom hook in JSX
  return (
    <>
      <h1>{joke.joke}</h1>
      <button onClick={handleNextJoke} type="button">
        Next Joke
      </button>
    </>
  );
}
