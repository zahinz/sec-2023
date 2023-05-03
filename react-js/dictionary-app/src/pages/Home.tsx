import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [word, setWord] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const navigate = useNavigate();

  // arrow function
  // const myFunction = async () => {
  //   return "test";
  // };

  // function declative
  async function handleSearchDefinition() {
    // change loading state to true
    setLoading(true);

    // call api using the word
    const response = await fetch(
      "https://api.dictionaryapi.dev/api/v2/entries/en/" + word
    );

    //   if the serched word is a legit word, convert to json and navigate
    if (response.status === 200) {
      const jsonData = await response.json();

      navigate("/" + word, {
        state: jsonData,
      });
    } else {
      setError(true);
    }
    setLoading(false);
  }
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Google</h1>
      <div>
        <input
          type="text"
          name="word"
          id="word"
          placeholder="Insert a word to search"
          onChange={(e) => {
            setError(false);
            setWord(e.target.value);
          }}
        />
        <button onClick={handleSearchDefinition}>Search</button>
        {isLoading ? <span>Loading...</span> : null}
      </div>
      {isError ? <span>Invalid input</span> : null}
    </div>
  );
}

export default Home;
