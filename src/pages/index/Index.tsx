import { useRecoilValueLoadable } from "recoil";
import { imageData } from "@/store/selectors/imageSelectors";
import Header from "@/components/common/header/Header";
import SearchBar from "@/components/common/searchBar/SearchBar";
import Nav from "@/components/common/navigation/Nav";
import Footer from "@/components/common/footer/Footer";
import styles from "./styles/index.module.scss";
import Card from "./components/Card";
import DetailDialog from "@/components/common/dialog/DetailDialog";
import { CardDTO } from "./types/card";
import { useMemo, useState } from "react";

function Index() {
  //const imgSelector = useRecoilValue(imageData);
  const imgSelector = useRecoilValueLoadable(imageData);
  const [imgData, setImgData] = useState<CardDTO>();
  const [open, setOepn] = useState<boolean>(false); // 이미지 상세 다이얼로그 발생(관리) state

  const CARD_LIST = useMemo(() => {
    //console.log(imgSelector);
    switch (imgSelector.state) {
      case "hasValue":
        return imgSelector.contents.map((card: CardDTO) => {
          return (
            <Card
              data={card}
              key={card.id}
              handleDialog={setOepn}
              handleSetData={setImgData}
            />
          );
        });
      case "loading":
        return <div>Loading..</div>;
      default:
        return null;
    }
  }, [imgSelector]);

  return (
    <div className={styles.page}>
      {/* 공통 헤더 UI 부분 */}
      <Header />
      {/* 공통 네비게이션 UI 부분 */}
      <Nav />
      <div className={styles.page__contents}>
        <div className={styles.page__contents__introBox}>
          <div className={styles.wrapper}>
            <span className={styles.wrapper__title}>PhotoSplash</span>
            <span className={styles.wrapper__desc}>
              인터넷의 시각 자료 출처입니다.
              <br />
              모든 지역에 있는 크리에이터들의 지원을 받습니다.
            </span>
            {/* 검색창 UI 부분 */}
            <SearchBar />
          </div>
        </div>
        <div className={styles.page__contents__imageBox}>{CARD_LIST}</div>
      </div>
      {/* 공통 푸터 UI 부분 */}
      <Footer />
      {open && <DetailDialog data={imgData} handleDialog={setOepn} />}
    </div>
  );
}

export default Index;
