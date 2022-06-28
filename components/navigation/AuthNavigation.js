import React, { useEffect, useState } from "react";
import { SignedInStack, SignedOutStack } from "./NavigationStack";
import { auth } from "../../firebase";

const AuthNavigation = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(user => setUser(user))
  }, [])

  return <>{!!user ? <SignedInStack /> : <SignedOutStack />}</>;
};

export default AuthNavigation;
