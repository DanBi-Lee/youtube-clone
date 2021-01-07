import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './SearchBoxMain.module.css';

function SearchBoxMain () {
    const history = useHistory();
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`./search?keyword=${searchInput.current.value}`);
    };
    const searchInput = useRef();

  return (
      <section className={styles.searchBox}>
          <h1>원하는 영상을 검색하세요!</h1>
          <form action="/search" onSubmit={handleSearch}>
              <input type="text" placeholder="검색어 입력" className={styles.searchInput} ref={searchInput} />
              <button type="submit" className={styles.searchButton} >
                  검색
              </button>
          </form>
      </section>
  );
}

export default SearchBoxMain;