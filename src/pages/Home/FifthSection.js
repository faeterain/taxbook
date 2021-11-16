import React from "react";
import Footer from "../../components/footer/Footer";
import * as styles from "./FifthSection.module.scss";

const FifthSection = (props) => {
  return (
    <>
      <div 
          className={[
            props.currentPage === 5 ? "aos-animate" : "",
            styles.sectionBackground
          ].join(" ")}
          data-aos="zoom-out"
          data-aos-duration="400"
      >
        <div className={styles.firstContent}>
          <div className="section-title">
            <span className="highlight-text">Bài viết mới nhất</span><br />từ TaxBook 
          </div>
          <img src="/imgs/s5_1.svg" alt="Bài viết mới nhất" />
        </div>
        <div className={styles.divideLine}></div>
        <div className={styles.secondContent}>
          <div className={styles.newsContent}>
            <div className={styles.itemBlock}>
              <img src="/imgs/s5_2.svg" alt=""/>
              <div className={styles.content}>
                <div className={styles.titleBlock}>
                  <div className={styles.tag}>Chính sách</div>
                  <div className={styles.datetime}>20-10-2021</div>
                </div>
                <div className={styles.textContent}>
                  Nghị định 92 tạo thuận lợi tối đa cho người nộp thuế và cho công tác quản lý thu
                </div>
              </div>
            </div>
            <div className={styles.itemBlock}>
              <img src="/imgs/s5_3.svg" alt=""/>
              <div className={styles.content}>
                <div className={styles.titleBlock}>
                  <div className={styles.tag}>Kinh nghiệm</div>
                  <div className={styles.datetime}>25-10-2021</div>
                </div>
                <div className={styles.textContent}>
                  Nâng cao văn hóa kinh doanh trong nền kinh tế thị trường ở Việt Nam hiện nay
                </div>
              </div>
            </div>
            <div className={styles.itemBlock}>
              <img src="/imgs/s5_4.svg" alt=""/>
              <div className={styles.content}>
                <div className={styles.titleBlock}>
                  <div className={styles.tag}>Số liệu</div>
                  <div className={styles.datetime}>28-10-2021</div>
                </div>
                <div className={styles.textContent}>
                  Doanh nghiệp thành lập mới tháng 10/2021 tăng cả số lượng và vốn đăng ký
                </div>
              </div>
            </div>

          </div>
          <button className="btn btn-outline-primary padding12-16">Xem tất cả bài viết</button>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default FifthSection;
