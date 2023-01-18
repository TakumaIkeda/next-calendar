import { Container } from "@mui/material";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";

type UnauthorizedLayoutProps = {
  children: React.ReactNode;
};

const UnauthorizedLayout = ({ children }: UnauthorizedLayoutProps) => {
  const router = useRouter();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });
  }, []);
  return <Container maxWidth="sm">{children}</Container>;
};

export default UnauthorizedLayout;
