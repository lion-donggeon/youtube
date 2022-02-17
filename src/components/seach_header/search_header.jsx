import React, { memo, useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef();
  const handleSeach = () => {
    const val = inputRef.current.value;
    onSearch(val);
  };
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSeach();
    }
  };
  const onClick = () => {
    handleSeach();
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="" />
        <h1 className={styles.title}>Youtube</h1>
      </div>

      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="검색혀"
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <img className={styles.buttonImage} src="./images/search.png" alt="" />
      </button>
    </header>
  );
});

export default SearchHeader;
