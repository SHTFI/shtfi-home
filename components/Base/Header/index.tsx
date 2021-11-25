import { HeaderProps } from "../types";
import style from "./Header.module.scss";

const Header: React.FC<HeaderProps> = ({
  title,
  subTitle,
  logo,
  logoAlt,
  children,
  ...rest
}) => {
  return (
    <header className={style.header__wrapper} {...rest}>
      {logo && (
        <picture className={style.header__logo}>
          <img src={logo} alt={logoAlt} width={75} height={75} />
        </picture>
      )}
      <div className={style.header__content}>
        <h1>{title}</h1>
        {subTitle && <p>{subTitle}</p>}
      </div>
    </header>
  );
};

export default Header;
