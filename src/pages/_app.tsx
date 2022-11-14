import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { DictionaryProvider } from "../context/dictionary-context";
import theme from "../theme/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <DictionaryProvider>
        <Component {...pageProps} />
      </DictionaryProvider>
    </ChakraProvider>
  );
}
