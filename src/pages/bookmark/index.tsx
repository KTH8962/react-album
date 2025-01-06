import Header from "@/components/common/header/Header";
import styles from "./style/index.module.scss";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import { CardDTO } from "../index/types/card";

function index() {
  const [data, setData] = useState([]);
  const getData = () => {
    const getLocalStorage = JSON.parse(localStorage.getItem("bookmark"));
    if (getLocalStorage || getLocalStorage !== null) {
      setData(getLocalStorage);
    } else {
      setData([]);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.page__contents}>
        {data.length === 0 ? (
          <div className={styles.page__contents__noData}>
            북마크에 추가 한 데이터가 없습니다.
          </div>
        ) : (
          data.map((item: CardDTO) => {
            return <Card prop={item} key={item.id} />;
          })
        )}
      </main>
    </div>
  );
}

export default index;
