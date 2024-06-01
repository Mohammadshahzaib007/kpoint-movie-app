import cx from "classnames";
import styles from "./index.module.css";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container(props: ContainerProps) {
  const { children, className } = props;
  return <div className={cx(styles.container, className)}>{children}</div>;
}
