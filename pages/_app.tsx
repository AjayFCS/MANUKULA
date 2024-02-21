import type { AppProps } from "next/app";
import { Playfair } from "next/font/google";
import "../styles/globals.css";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="">
      <NavBar /> <Component {...pageProps} />
      <Footer />
    </div>
  );
}
