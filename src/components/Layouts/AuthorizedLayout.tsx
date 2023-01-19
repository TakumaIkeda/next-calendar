import { useAuthorizedHandler } from "@/hooks/auth/useAuth";
import { Button, Container } from "@mui/material";

type UnauthorizedLayoutProps = {
  children: React.ReactNode;
};

const AuthorizedLayout = ({ children }: UnauthorizedLayoutProps) => {
  const { handleSignOut: signOut } = useAuthorizedHandler();

  return (
    <>
      <Container maxWidth="md">
        {children}
        <Button onClick={signOut}>ログアウト</Button>
      </Container>
    </>
  );
};

export default AuthorizedLayout;
