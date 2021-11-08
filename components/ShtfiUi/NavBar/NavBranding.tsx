import { NavBrandingProps } from "../types";

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
    <a href="/" title="Go back home">
      {logo ? (
        <img src={logo} alt={logoAlt} height={logoWidth} width={logoHeight} />
      ) : null}
      {wording ? <span>{wording}</span> : null}
    </a>
  );
};

export default NavBranding;
