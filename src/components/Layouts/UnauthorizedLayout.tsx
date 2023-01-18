import { Container } from "@mui/material";

type UnauthorizedLayoutProps = {
  children: React.ReactNode;
};

const UnauthorizedLayout = ({ children }: UnauthorizedLayoutProps) => {
  return <Container maxWidth="sm">{children}</Container>;
};

export default UnauthorizedLayout;
