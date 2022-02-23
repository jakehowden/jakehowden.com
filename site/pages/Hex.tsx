import { FunctionComponent } from "react";
import Tilt from "react-parallax-tilt";
import styles from '../styles/Hex.module.css'

const Hex: FunctionComponent = () => {
  return (
    <div>
      <Tilt>
        <div className={styles.hexagon}>
          <h1 className={styles.center}>Jake.</h1>
        </div>
      </Tilt>
    </div>
  );
};

export default Hex;
