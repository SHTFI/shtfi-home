import Image from "next/image";
const BurgerMenuIcon: React.FC<{
  iconPath?: string;
  iconAlt?: string;
  width?: number;
  height?: number;
}> = ({ iconPath, iconAlt, ...rest }) =>
  !!iconPath ? (
    <Image src={iconPath} alt={iconAlt} {...rest} />
  ) : (
    <svg
      width="17"
      height="12"
      viewBox="0 0 17 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="1"
        y1="1"
        x2="16"
        y2="1"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="1"
        y1="6"
        x2="16"
        y2="6"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="1"
        y1="11"
        x2="16"
        y2="11"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
export default BurgerMenuIcon;
