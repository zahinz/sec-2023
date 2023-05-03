import DictionaryCard from "./components/DictionaryCard";
import useDictionaryApi from "./hooks/useDictionaryApi";

const App = () => {
  const { refetch, isLoading, isError, data } = useDictionaryApi();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // @ts-ignore
    const [word] = e.target;
    refetch(word.value);
  };

  console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="word" id="word" />
        <button>Check</button>
      </form>
      {isLoading && <span>Loading</span>}
      {isError && <span>Error</span>}
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {data?.map((item, index) => {
          return <DictionaryCard data={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default App;
