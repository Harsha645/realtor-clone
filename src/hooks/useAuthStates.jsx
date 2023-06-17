import { getAuth, onAuthStateChanged } from "firebase/auth";
import  { useEffect, useState } from "react";

export  function useAuthStates() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStates] = useState(true);

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      }
      setCheckingStates(false);
    });
  }, []);

  return {loggedIn,checkingStatus}
}
