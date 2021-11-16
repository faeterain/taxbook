import React from "react";
import * as styles from "./ThirdSection.module.scss";

const ThirdSection = (props) => {
  return (
    <>
      <div className={styles.sectionBackground}>
        <div
          className={[
            props.currentPage === 3 ? "aos-animate" : "", styles.background
          ].join(" ")}
          data-aos="fade-right"
          data-aos-duration="300"
        >
          <img
          className={styles.decoration}
          src="/imgs/third-decoration.png"
          alt="Taxbook"
          />
        </div>
        <div className={styles.content}>
          <div
            className={[
              props.currentPage === 3 ? "aos-animate" : "",
              "section-title"
            ].join(" ")}
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="300"
          >
            <span className="highlight-text">TaxBook App</span> - Công cụ không thể thiếu <br/>của chủ doanh nghiệp trong thời đại 4.0
          </div>
          <div className={styles.blockContent}>
            <ul
                className={[
                  props.currentPage === 3 ? "aos-animate" : "",
                  styles.contentItems
                ].join(" ")}
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-duration="400"
            >
              <li className={styles.item}>
              Ứng dụng dành riêng cho doanh nghiệp sử dụng dịch vụ của đối tác từ nền tảng TaxBook. Đặc biệt, miễn phí trọn đời. 
              </li>
              <li className={styles.item}>
              Ứng dụng dành riêng cho doanh nghiệp sử dụng dịch vụ của đối tác từ nền tảng TaxBook. Đặc biệt, miễn phí trọn đời. 
              </li>
              <li className={styles.item}>
              Ứng dụng dành riêng cho doanh nghiệp sử dụng dịch vụ của đối tác từ nền tảng TaxBook. Đặc biệt, miễn phí trọn đời. 
              </li>
            </ul>
            <div
                className={[
                  props.currentPage === 3 ? "aos-animate" : "",
                  styles.buttonPosition
                ].join(" ")}
                data-aos="zoom-in"
                data-aos-delay="600"
                data-aos-duration="400"
            >
              <a
                
                className={[props.currentPage===2?"aos-animate":"", styles.android].join(' ')}
                href="#android"
              >Android</a>
              <a
                variant="primary"
                size="lg"
                className={[props.currentPage===2?"aos-animate":"", styles.ios].join(' ')}
                href="#ios"
              >IOS</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ThirdSection;
