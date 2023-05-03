import { useState, useEffect, useCallback } from "react";
import { DictionaryEntry } from "../type/api";
import { getDefinition } from "../api/dictionary";

interface DictionaryApiState {
  data: DictionaryEntry[] | null;
  isLoading: boolean;
  isError: boolean;
  refetch: (word: string) => void;
}

const useDictionaryApi = (): DictionaryApiState => {
  const [data, setData] = useState<DictionaryEntry[] | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);

  const fetchData = async (word: string) => {
    try {
      const res = await getDefinition(word);
      if (res.status === 200) {
        const json = await res.json();
        setError(false);
        setData(json);
      } else {
        setError(true);
      }
    } catch (error) {
      console.log(error);
      setError(true);
    }
    setLoading(false);
  };

  const refetch = useCallback(
    (word: string) => {
      setLoading(true);
      fetchData(word);
    },
    [fetchData]
  );

  return { data, isLoading, isError, refetch };
};

export default useDictionaryApi;
