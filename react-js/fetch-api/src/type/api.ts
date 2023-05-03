export interface Meaning {
  partOfSpeech?: string;
  definitions?: Array<{
    definition?: string;
    synonyms?: string[];
    antonyms?: string[];
    example?: string;
  }>;
  synonyms?: string[];
  antonyms?: string[];
}

export interface Phonetics {
  text?: string;
  audio?: string;
  sourceUrl?: string;
  license?: {
    name?: string;
    url?: string;
  };
}

export interface License {
  name?: string;
  url?: string;
}

export interface DictionaryEntry {
  word?: string;
  phonetic?: string;
  phonetics?: Phonetics[];
  meanings?: Meaning[];
  license?: License;
  sourceUrls?: string[];
}
