import GlobalStyles from "../styles/GlobalStyles";
import { ThemeProvider } from "emotion-theming";
import { theme } from "../styles/theme";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
