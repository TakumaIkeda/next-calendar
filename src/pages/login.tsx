import UnauthorizedLayout from "@/components/Layouts/UnauthorizedLayout";
import { Button, Card, CardContent } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import firebaseApp from "@/libs/firebase";
import { useRouter } from "next/router";

const LoginPage: NextPage = () => {
  const router = useRouter();
  const provider = new GoogleAuthProvider();

  const login = async () => {
    const auth = getAuth(firebaseApp);
    await signInWithPopup(auth, provider).then(() => {
      router.push("/");
    });
  };

  return (
    <>
      <Head>
        <title>ログイン | calendar app</title>
      </Head>
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
              <Button variant="contained" color="error" onClick={login}>
                Googleでログイン
              </Button>
            </CardContent>
          </Card>
        </div>
      </UnauthorizedLayout>
    </>
  );
};

export default LoginPage;
