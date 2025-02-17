import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import navJosn from "./nav.json";
import styles from "./Nav.module.scss";
import { useSetRecoilState } from "recoil";
import { pageState } from "@/store/atoms/pageState";
import { searchState } from "@/store/atoms/searchState";

interface Navigation {
  index: number;
  path: string;
  label: string;
  searchValue: string;
  isActive: boolean;
}

function Nav() {
  const location = useLocation();
  const [navigation, setNavigation] = useState<Navigation[]>(navJosn);
  const setPage = useSetRecoilState(pageState);
  const setSearch = useSetRecoilState(searchState);

  useEffect(() => {
    //console.log(location.pathname);
    navigation.forEach((nav: Navigation) => {
      nav.isActive = false;
      if (
        nav.path === location.pathname ||
        location.pathname.includes(nav.path)
      ) {
        nav.isActive = true;
        setSearch(nav.searchValue);
        setPage(1);
      }
    });
    setNavigation([...navigation]);
  }, [location.pathname]);

  // useState로 선언한 반응성을 가진 데이터를 기반으로 UI를 반복호출
  const navLinks = navigation.map((item: Navigation) => {
    if (item.index > 0) {
      return (
        <Link
          to={item.path}
          className={
            item.isActive
              ? `${styles.navigation__menu} ${styles.active}`
              : `${styles.navigation__menu} ${styles.inactive}`
          }
          key={item.path}
        >
          <span className={styles.navigation__menu__label}>{item.label}</span>
        </Link>
      );
    }
  });

  return <nav className={styles.navigation}>{navLinks}</nav>;
}

export default Nav;
