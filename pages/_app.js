import NavBar from "@/shared/NavBar";
import "@/styles/globals.css";
import "@/styles/featuredproducts.css";

export default function App({ Component, pageProps }) {
  return (
    <>
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.1/css/all.css"
      />
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
