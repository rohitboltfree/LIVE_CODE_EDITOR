// create a user conetxt

import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, getAllCodes } from "../config/firebase";

export const UserContext = createContext(null);

export const useUser = () => {
  return useContext(UserContext);
}

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, async(user) => {
      if (user) {
        console.log(user);
        const data = await getAllCodes();
        setUser({
          userDetail: user,
          currentFile: data.length > 0 ? data[data.length - 1] : null,
          files: data.length > 0 ? data : [],
        });
      } else {
        console.log("user is signed out");
        setUser(null);
      }
    });
    console.log("UserProvider");
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider