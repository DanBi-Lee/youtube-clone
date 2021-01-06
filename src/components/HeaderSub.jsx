import React from 'react';
import styles from "./HeaderMain.module.css";

function HeaderSub () {
  return (
      <header className={styles.header}>
          <button>뒤로가기</button>
          <input type="text"/>
      </header>
  );
}

export default HeaderSub;