import styles from './SearchBar.module.scss'

function SearchBar() {
  return (
    <div className={styles.searchBar}>
        <div className={styles.searchBar__search}>
            <input type="text" placeholder='찾으실 이미지를 검색하세요.' className={styles.searchBar__input} />
            <img src="src/assets/icons/icon-search.svg" alt="검색 아이콘" />
        </div>
    </div>
  )
}

export default SearchBar