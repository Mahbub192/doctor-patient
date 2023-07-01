import NavBar from "@/shared/NavBar";
import "@/styles/globals.css";
import "@/styles/featuredproducts.css";
import AuthProvider from "@/providers/AuthProvider";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    );
  }

  return (
    <AuthProvider>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.1/css/all.css"
        />

        <NavBar />
        <Component {...pageProps} />
    </AuthProvider>
  );
}
