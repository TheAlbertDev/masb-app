import { extendTheme } from "@chakra-ui/react";
import styles from "./styles";
import config from "./config";

const theme = extendTheme({
  styles,
  config,
});

export default theme;
