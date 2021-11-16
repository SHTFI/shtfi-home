import { NavBrandingProps } from "../types";
import style from "./NavBar.module.scss";

const NavBranding: React.FC<NavBrandingProps> = ({
  logo,
  logoAlt,
  logoWidth,
  logoHeight,
  wording,
}) => {
  // If neither logo or wording is provided throw an error
  if (!!!logo && !!!wording) {
    throw new Error(
      "Nav Branding must have receive either the logo or wording props"
    );
  }
  // Return our branding element
  return (
    <a href="/" title="Go back home" className={style.branding}>
      {logo ? (
        <img
          src={logo}
          alt={logoAlt}
          height={!!logoHeight ? logoHeight : 30}
          width={!!logoWidth ? logoWidth : 30}
        />
      ) : null}
      {wording ? <span>{wording}</span> : null}
    </a>
  );
};

export default NavBranding;
