import { useEffect } from "react";
import type { AppProps } from "next/app";
import { NavBar, Footer, FooterTile } from "components";
import GlobalStyle from "styles/globals";
import GlobalFonts from "styles/fonts";
const MyApp = ({ Component, pageProps }: AppProps) => {
  // Ensure this only runs on the client
  if (typeof window !== "undefined") {
    useEffect(() => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    }, []);
  }
  return (
    <>
      <GlobalStyle />
      <GlobalFonts />
      <NavBar
        linkList={[
          {
            href: "/",
            title: "A link",
            label: "A Label",
            iconAlt: "An icon",
            icon: "/assets/icons/shtfi.svg",
          },
          {
            href: "/",
            title: "A link",
            label: "A Label",
            iconAlt: "An icon",
            icon: "/assets/icons/shtfi.svg",
          },
          {
            href: "/",
            title: "A link",
            label: "A Label",
            iconAlt: "An icon",
            icon: "/assets/icons/shtfi.svg",
          },
          {
            href: "/",
            title: "A link",
            label: "A Label",
            iconAlt: "An icon",
            icon: "/assets/icons/shtfi.svg",
          },
          {
            href: "/",
            title: "A link",
            label: "A Label",
            iconAlt: "An icon",
            icon: "/assets/icons/shtfi.svg",
          },
          {
            href: "/",
            title: "A link",
            label: "A Label",
            iconAlt: "An icon",
            icon: "/assets/icons/shtfi.svg",
          },
          {
            href: "/",
            title: "A link",
            label: "A Label",
            iconAlt: "An icon",
            icon: "/assets/icons/shtfi.svg",
          },
          {
            href: "/",
            title: "A link",
            label: "A Label",
            iconAlt: "An icon",
            icon: "/assets/icons/shtfi.svg",
          },
        ]}
        logo="/assets/icons/shtfi.svg"
      />
      <Component {...pageProps} />
      <Footer>
        <FooterTile />
      </Footer>
    </>
  );
};

export default MyApp;
