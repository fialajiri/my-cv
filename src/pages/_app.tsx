import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { DictionaryProvider } from "../context/dictionary-context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <DictionaryProvider>
        <Component {...pageProps} />
      </DictionaryProvider>
    </ChakraProvider>
  );
}
