import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.pagenation}>
        <button className={styles.pagenation__button}>
          <img src="src/assets/icons/icon-arrowLeft.svg" alt="이전버튼" />
        </button>
        {/* 변경될 UI 부분 */}
        <span>1</span>
        <button className={styles.pagenation__button}>
          <img src="src/assets/icons/icon-arrowRight.svg" alt="다음버튼" />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
