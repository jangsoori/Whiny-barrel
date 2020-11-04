import GlobalStyles from "../styles/GlobalStyles";
import { ThemeProvider } from "emotion-theming";
import { theme } from "../styles/theme";
import CartProvider from "../contexts/CartContext";
import ShopProvider from "../contexts/ShopContext";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ShopProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </ShopProvider>
    </ThemeProvider>
  );
}

export default MyApp;
