import { Auth, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { useCallback } from "react";

export const useAuthorizedHandler = () => {
  const router = useRouter();
  const auth = getAuth();

  useCallback(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/calendar");
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth);
  };

  return { handleSignOut };
};

export const useUnauthorizedHandler = () => {
  const router = useRouter();
  const auth = getAuth();

  useCallback(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login");
      }
    });
  }, []);
};
