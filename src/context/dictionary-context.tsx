import React, { useState, Fragment, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import dictionaryCz from "../../public/data/cs/dictionary-cz.json";
import dictionaryEn from "../../public/data/en/dictionary-en.json";
import { Dictionary } from "../models/dictionary";

export interface DictionaryContextInterface {
  dictionary: Dictionary;
}

export const dictionaryContextDefaults: DictionaryContextInterface = {
  dictionary: dictionaryCz,
};
export const DictionaryContext =
  React.createContext<DictionaryContextInterface>(dictionaryContextDefaults);

export const useDictionary = () => {
  return useContext(DictionaryContext);
};

interface DictionaryProviderProps {
  children: React.ReactNode;
}

export const DictionaryProvider = ({ children }: DictionaryProviderProps) => {
  const { locale } = useRouter();
  const [dictionary, setDictionary] = useState(dictionaryCz);

  useEffect(() => {
    setDictionary(locale === "cs" ? dictionaryCz : dictionaryEn);
  }, [locale]);

  const value = {
    dictionary,
  };

  return (
    <Fragment>
      <DictionaryContext.Provider value={value}>{children}</DictionaryContext.Provider>
    </Fragment>
  );
};
