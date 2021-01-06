import React from 'react';
import styles from './SearchBoxMain.module.css';

function SearchBoxMain () {
  return (
      <section className={styles.searchBox}>
          <h1>원하는 영상을 검색하세요!</h1>
          <form action="/search">
              <input type="text" placeholder="검색어 입력" className={styles.searchInput} />
              <button type="submit" className={styles.searchButton} >
                  검색
              </button>
          </form>
      </section>
  );
}

export default SearchBoxMain;