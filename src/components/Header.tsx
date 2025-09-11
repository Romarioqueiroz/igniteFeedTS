import styles from "./Header.module.css";
import IgniteLogo from "../assets/ignite-logo.svg";

console.log(IgniteLogo);
const Header = () => {
  return (
    <header className={styles.header}>
      <img src={IgniteLogo} alt="LogoTipo do Ignite" />
    </header>
  );
};

export default Header;
