import { Fragment } from "react";
import { DictionaryEntry } from "../type/api";

interface DictionaryCardProps {
  data: DictionaryEntry;
}

const DictionaryCard = ({ data }: DictionaryCardProps) => {
  return (
    <div
      style={{
        maxWidth: "400px",
        display: "inline-block",
        borderStyle: "solid",
        borderColor: "lightgray",
        borderRadius: "5px",
        padding: "1rem",
      }}
    >
      <p>{data.word}</p>
      <p>
        <span>{data.phonetic}</span>
      </p>
      <div>
        {data.meanings?.map((meaning, index) => {
          return (
            <div key={index} style={{ marginTop: "1rem" }}>
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: "blue",
                  color: "white",
                  padding: "0.5rem",
                  borderRadius: "4px",
                }}
              >
                {meaning.partOfSpeech}
              </span>
              <ol style={{ display: "block" }}>
                {meaning.definitions?.map((definition, index) => {
                  return (
                    <li style={{ display: "block" }} key={index}>
                      {index + 1}. {definition.definition}
                    </li>
                  );
                })}
              </ol>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DictionaryCard;
