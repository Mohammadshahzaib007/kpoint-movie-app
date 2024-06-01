import Pill from "../pill";
import Nav from "./nav";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <Nav />
      <h1>Layout</h1>
      <header>
        <Pill name="All" />
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
