import React, {useContext, useState} from "react";
import AuthContext from "../store/AuthContext";

export default function profile() {
  const [metamaskAlert, setmetamaskAlert] = useState("Necesitas tener metamask instalado en el browser");
  const [account, setAccount] = useState(null);
  const [metamask, setMetamask] = useState(false);
  const {user} = useContext(AuthContext);
  const username = user ? user.user_metadata.full_name : null
  const firstLetter = username && username[0].toUpperCase()
  const email = user ? user.email : null

  function resumedAddress(address) {
    return `${address.slice(0, 4)}...${address.slice(-4)}`
  }

  const connectWallet = () => {
    if(window.ethereum && window.ethereum.isMetaMask) {
      //metamask esta instalado
      window.ethereum.request({method: "eth_requestAccounts"})
        .then(result => {
          setAccount(result[0])
          setMetamask(false)
        })
        .catch(err => {
          setmetamaskAlert(err.message)
          setMetamask(true)
        })
    } else {
      //metamask no esta instalado
      setmetamaskAlert("Necesitas tener metamask instalado en el browser")
      setMetamask(true);
    }
  }

  return(
    <div className="containerProfile">
      <div className="profileCard">
        {user && <h1 className="firstLetter">{firstLetter}</h1>}
        {user && <h1 className="username">{username}</h1>}
        {user && <p className="userEmail">{email}</p>}
        {!account && <button className="metamaskBtn" onClick={connectWallet}>conectar metamask</button>}
        <div className="divContent">
          {metamask && <p className="metamaskAlert">{metamaskAlert}</p>}
          {account && <h3>{resumedAddress(account)}</h3>}
        </div>
      </div>
    </div>
  );
}