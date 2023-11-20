import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { UserInfoProvider } from "@/context/userInfoContext";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <UserInfoProvider>
        <Component {...pageProps} />
      </UserInfoProvider>
    </SessionProvider>
  );
}
