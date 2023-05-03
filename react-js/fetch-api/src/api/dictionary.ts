export const getDefinition = async (word: string) => {
  return await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
};
