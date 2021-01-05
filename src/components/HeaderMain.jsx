import React from 'react';
import { Link } from "react-router-dom";
import styles from "./HeaderMain.module.css";

function HeaderMain () {
  return (
      <header className={styles.header}>
            <h1>
              <Link to="/">Youtube.D</Link>
            </h1>
          <button>다크모드</button>
      </header>
  );
}

export default React.memo(HeaderMain);