import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import MasbAppTheme from "./theme";

const App = () => {
  return <ChakraProvider theme={MasbAppTheme}>Hola</ChakraProvider>;
};

ReactDOM.render(<App />, document.getElementById("root"));
