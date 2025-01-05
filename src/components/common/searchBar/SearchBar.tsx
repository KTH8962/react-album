import { useState } from "react";
import styles from "./SearchBar.module.scss";
import { useRecoilState } from "recoil";
import { searchState } from "@/store/atoms/searchState";

function SearchBar() {
  const [search, setSearch] = useRecoilState(searchState);
  const [text, setText] = useState("");
  const changeText = (event) => {
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
    if (text === "") {
      //input 태그 안에 빈 값으로 검색하였을 때 => searching default value
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
          src="src/assets/icons/icon-search.svg"
          alt="검색 아이콘"
          onClick={onSearch}
        />
      </div>
    </div>
  );
}

export default SearchBar;
