import Navbar from "../components/Navbar";
import { AuthContextProvider } from "../store/AuthContext";
import "../styles/globals.css"
import React from "react";
import {LangProvider} from "../context/LangContext";

function MyApp({ Component, pageProps }) {
  return(
    <AuthContextProvider>
      <LangProvider>
        <Navbar/>
        <Component {...pageProps} />
      </LangProvider>  
    </AuthContextProvider>
  );
}

export default MyApp
