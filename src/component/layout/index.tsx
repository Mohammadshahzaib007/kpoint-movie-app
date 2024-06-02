import Pill from "../pill";
import Nav from "./nav";
import Container from "../container";
import styles from "./index.module.css";
import useRootStateContext from "../../state/useRootStateContext";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  const { children } = props;

  const { genres, onPillClickHandler, selectedGenre } = useRootStateContext();

  return (
    <>
      <Nav />
      <header className={styles.header}>
        <Container>
          {genres.map((g) => (
            <Pill
              key={g.id}
              name={g.name}
              onClick={() => onPillClickHandler(g.id)}
              selected={selectedGenre.includes(g.id)}
            />
          ))}
        </Container>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
