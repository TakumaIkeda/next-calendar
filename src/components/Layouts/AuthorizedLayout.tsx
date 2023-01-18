import { Button, Container } from "@mui/material";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";

type UnauthorizedLayoutProps = {
  children: React.ReactNode;
};

const AuthorizedLayout = ({ children }: UnauthorizedLayoutProps) => {
  const router = useRouter();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login");
      }
    });
  }, []);

  return (
    <>
      <Container maxWidth="sm">
        {children}
        <Button onClick={() => signOut(auth)}>ログアウト</Button>
      </Container>
    </>
  );
};

export default AuthorizedLayout;
