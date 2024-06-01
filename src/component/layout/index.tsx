import Pill from "../pill";
import Nav from "./nav";
import Container from "../container";
import styles from "./index.module.css";
import { useContext } from "react";
import { RootStateContext } from "../../state/provider";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  const { children } = props;

  const { genres } = useContext(RootStateContext);

  return (
    <>
      <Nav />
      <header className={styles.header}>
        <Container>
          {genres.map((g) => (
            <Pill key={g.id} name={g.name} />
          ))}
        </Container>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
