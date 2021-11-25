import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { NavBar, Footer, FooterTile } from "components";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
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
