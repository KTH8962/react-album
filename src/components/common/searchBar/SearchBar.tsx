import { useState } from "react";
import styles from "./SearchBar.module.scss";
import { useSetRecoilState } from "recoil";
import { searchState } from "@/store/atoms/searchState";
import { pageState } from "@/store/atoms/pageState";

function SearchBar() {
  const setSearch = useSetRecoilState(searchState);
  const setPage = useSetRecoilState(pageState);
  const [text, setText] = useState("");
  const changeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    //console.log(event.target.value);
    setText(event.target.value);
  };
  const onSearch = () => {
    fnSearch();
  };
  const handleKeyDown = (event: React.KeyboardEvent) => {
    // console.log(event);
    if (event.key === "Enter") {
      fnSearch();
    }
  };
  const fnSearch = () => {
    //input 태그 안에 빈 값으로 검색하였을 때 => searching default value
    setPage(1);
    if (text === "") {
      setSearch("Korea");
    } else {
      setSearch(text); // 작성한 Input Value 값 할당
    }
  };
  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBar__search}>
        <input
          type="text"
          placeholder="찾으실 이미지를 검색하세요."
          className={styles.searchBar__input}
          onChange={changeText}
          onKeyDown={handleKeyDown}
        />
        <img
          src="/assets/icons/icon-search.svg"
          alt="검색 아이콘"
          onClick={onSearch}
        />
      </div>
    </div>
  );
}

export default SearchBar;
