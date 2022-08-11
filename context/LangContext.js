import React, { useState } from "react";
import English from "../lang/en-US.json"
import Spanish from "../lang/es-MX.json"
import {IntlProvider} from "react-intl"

const LangContext = React.createContext();

// const local = "en-US";
// console.log(local)

// let lang;
// if(local === "en-US") {
//   lang = English
// } else {
//   lang = Spanish
// }

const LangProvider = ({children}) => {
  const [messages, setMessages] = useState(English);
  const [locale, setLocale] = useState("en-US");
  
  const selectLang = (e) => {
    // const newLocale = e.target.value
    setLocale(e);
    if(e === "es-MX") {
      setMessages(Spanish)
    } else {
      setMessages(English)
    }
  }

  return(
    <LangContext.Provider value={{locale, selectLang}}>
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </LangContext.Provider>
  );
}

export {LangProvider, LangContext};