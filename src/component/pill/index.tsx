import styles from "./index.module.css";
import cx from "classnames";

type PropTypes = {
  name: string;
  onClick?: () => void;
  selected?: boolean;
};

export default function Pill(props: PropTypes) {
  const { name, onClick, selected } = props;
  return (
    <div
      className={cx(styles.pill, {
        [styles.pillSelected]: selected,
      })}
      onClick={onClick}
    >
      {name}
    </div>
  );
}
