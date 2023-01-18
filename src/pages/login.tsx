import UnauthorizedLayout from "@/components/Layouts/UnauthorizedLayout";
import { Button, Card, CardContent } from "@mui/material";
import { NextPage } from "next";

const LoginPage: NextPage = () => {
  return (
    <UnauthorizedLayout>
      <div
        style={{
          height: "95vh",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Card sx={{ minWidth: 275, minHeight: 250 }}>
          <CardContent sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" color="error">
              Googleでログイン
            </Button>
          </CardContent>
        </Card>
      </div>
    </UnauthorizedLayout>
  );
};

export default LoginPage;
