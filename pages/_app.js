import GlobalStyles from "../styles/GlobalStyles";
import { ThemeProvider } from "emotion-theming";
import { theme } from "../styles/theme";
import CartProvider from "../contexts/CartContext";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </ThemeProvider>
  );
}

export default MyApp;
