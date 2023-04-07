import styles from "../styles/ellipse.module.css";

type props = {
  width?: number;
  height?: number;
  color?: string;
};

export default function Ellipse({ width, color, height }: props) {
  return (
    <div
      className={styles.ellipse}
      style={{ backgroundColor: color, width: width, height: height }}
    ></div>
  );
}
