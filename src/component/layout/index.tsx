import Pill from "../pill";
import Nav from "./nav";
import { genera } from "../../contants/index";
import Container from "../container";
import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <Nav />
      <header className={styles.header}>
        <Container>
          {genera.map((g) => (
            <Pill key={g.id} name={g.name} />
          ))}
        </Container>
      </header>
      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
};

export default Layout;
