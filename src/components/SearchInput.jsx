import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';

function SearchInput () {
    const history = useHistory();
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`/search?keyword=${searchInput.current.value}`);
    };
    const searchInput = useRef();

  return (
    <form action="/search" onSubmit={handleSearch}>
        <input type="text" placeholder="검색어 입력" ref={searchInput} />
        <button type="submit" >
            검색
        </button>
    </form>
  );
}

export default SearchInput;