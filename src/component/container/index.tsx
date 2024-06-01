import styles from "./index.module.css";

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container(props: ContainerProps) {
  const { children } = props;
  return <div className={styles.container}>{children}</div>;
}
