import NavBar from "@/shared/NavBar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
