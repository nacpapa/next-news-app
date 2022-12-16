// SE IMPORTAN LOS ESTILOS GLOBALES PORQUE ENVUELVE TODO Y SE RENDERIZA SOLO UNA VEZ
import { createContext } from "react";
import "../styles/globals.css";

// EN ESTE ARCHIVO IRIAN LOS PROVEEDORES
const ThemeContext = createContext("dark");

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContext.Provider value='dark'>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}

export default MyApp;
