import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { NavBar } from "components";

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
        brandWording="SHTFI"
      />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
