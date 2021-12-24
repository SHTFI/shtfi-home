import { useEffect } from "react";
import type { AppProps } from "next/app";
import {
  NavBar,
  Footer,
  FooterTile,
  Heading,
  Modal,
  SocialLinks,
} from "components";
import { navLinks } from "utils";
import GlobalStyle from "styles/globals";
import GlobalFonts from "styles/fonts";
import Head from "next/head";
import { Web3Providers } from "context";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    }
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <GlobalStyle />
      <GlobalFonts />
      <NavBar linkList={navLinks} logo="/assets/icons/shtfi/shtfi.svg" />
      <Web3Providers>
        <Component {...pageProps} />
      </Web3Providers>
      <Footer>
        <SocialLinks align="center" />
        <FooterTile>
          <ul>
            <li>
              <Modal buttonLabel="About us" buttonProps={{ link: true }}>
                <Heading text="About SHTFI" level={3} />
                <p>
                  SHTFI is a decentralised and open source protocol which was
                  created as a side project.
                </p>
                <p>
                  It was made as a semi protest to the swathe of pointless meme
                  coins, clone coins and the general lack of innovation by some
                  so-called <em>dev teams</em>.
                </p>
              </Modal>
            </li>
            <li>
              <Modal buttonLabel="Privacy policy" buttonProps={{ link: true }}>
                <Heading text="Privacy policy" level={3} />
                <p>
                  We do not store any of your data nor do we pass it on to third
                  parties.
                </p>
                <p>
                  This site does not have any capability to track your behaviour
                  either online or offline.
                </p>
                <p>
                  We do not sell your data to advertisers (we dont have any data
                  on you) and we do not have any advertising pixels.
                </p>
              </Modal>
            </li>
            <li>
              <Modal buttonLabel="Terms of use" buttonProps={{ link: true }}>
                <Heading text="Terms of use" level={3} />
                <p>
                  Our terms of use are simple: by using this site you agree to
                  two things:
                </p>
                <ol>
                  <li>
                    SHTFI is not responsibly for any financial losses made when
                    interacting with the SHTFI website or protocol.
                  </li>
                  <li>
                    SHTFI is not responsible for any technical damage to your
                    machine when using the SHTFI website or protocol
                  </li>
                </ol>
              </Modal>
            </li>
          </ul>
        </FooterTile>
      </Footer>
    </>
  );
};

export default MyApp;
