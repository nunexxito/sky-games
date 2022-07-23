import React, {useContext} from "react";
import AuthContext from "../store/AuthContext";

export default function profile() {

  const {user} = useContext(AuthContext);
  const username = user ? user.user_metadata.full_name : null
  const firstLetter = username && username[0].toUpperCase()
  const email = user ? user.email : null

  return(
    <div className="containerProfile">
      <div className="profileCard">
        {user && <h1 className="firstLetter">{firstLetter}</h1>}
        {user && <h1 className="username">{username}</h1>}
        {user && <p className="userEmail">{email}</p>}
      </div>
    </div>
  );
}