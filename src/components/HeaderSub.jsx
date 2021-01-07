import React from 'react';
import styles from "./HeaderMain.module.css";
import SearchInput from './SearchInput';

function HeaderSub () {
  return (
      <header className={styles.header}>
          <button>뒤로가기</button>
          <SearchInput />
      </header>
  );
}

export default HeaderSub;