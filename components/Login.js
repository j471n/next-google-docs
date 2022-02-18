import Image from "next/image";
import Button from "@material-tailwind/react/Button";
import { signIn } from "next-auth/client";
import Icon from "@material-tailwind/react/Icon";

function Login({ providers }) {
  const { google } = providers;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 dark:bg-dark-mid">
      <Image
        src="https://rb.gy/rreijn"
        width="550"
        height="300"
        objectFit="contain"
        alt="docs"
      />

      <Button
        className="mt-10 capitalize bg-blue-500"
        buttonType="filled"
        ripple="dark"
        onClick={() => signIn(google.id)}
      >
        <Icon name="lock" size="xl" />
        Sign in with Google
      </Button>
    </div>
  );
}

export default Login;
