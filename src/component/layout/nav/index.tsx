import Logo from "../../../assets/logo.png";
import Container from "../../container";
import styles from "./index.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <Container>
        <img src={Logo} alt="logo" />
      </Container>
    </nav>
  );
}

export default Nav;
