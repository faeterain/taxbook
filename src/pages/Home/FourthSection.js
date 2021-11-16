import React from "react";
import * as styles from "./FourthSection.module.scss"

const FourthSection = (props) => {
  return (
    <>
      <div 
          className={[
            props.currentPage === 4 ? "aos-animate" : "",
            styles.sectionBackground
          ].join(" ")}
          data-aos="fade-up"
          data-aos-duration="400">
        <div
          className={[
            props.currentPage === 4 ? "aos-animate" : "",
            "section-title", styles.title
          ].join(" ")}
        >
          <span className="highlight-text">Tiêu chuẩn bảo mật</span> của TaxBook App
        </div>
        <div className={styles.subSection} id="section-1">
          <img src="/imgs/fourth_1.svg" alt="Bảo mật từ trong thiết kế  | Secure by design" />
          <div className={styles.subSectionBlock}>
            <div className={[styles.subSectionTitle, "small-bold color-primary-900"].join(" ")}>
              Bảo mật từ trong thiết kế  | Secure by design
            </div>
            <div className={styles.subSectionContent}>
              Chúng tôi hiểu rõ được tầm quan trọng của dữ liệu khách hàng, và thiết kế bảo mật cho nền tảng TaxBook từ những bước đầu tiên.
              <ul>
                <li>Chuẩn OWASP (Open Web Application Security Project)</li>
                <li>SQL injections</li>
                <li>XSS attacks</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.subSection}>
          <div className={styles.subSectionBlock}>
            <div className={[styles.subSectionTitle, "small-bold color-primary-900"].join(" ")}>
            Bảo mật sổ kế toán | Database security
            </div>
            <div className={styles.subSectionContent}>
              Tài sản lớn nhất mà TaxBook cung cấp cho khách hàng là sổ kế toán, vì vậy dữ liệu này được quản lý riêng theo từng khách hàng.
              <ul>
                <li>Dữ liệu được lưu trữ tách biệt </li>
                <li>Mã hóa mật khẩu đăng nhập </li>
                <li>Đảm bảo bằng SSL</li>
              </ul>
            </div>
          </div>
          <img src="/imgs/fourth_2.svg" alt="Bảo mật sổ kế toán | Database security" />
        </div>
        <div className={styles.subSection} id="section-2">
          <img src="/imgs/fourth_3.svg" alt="Bảo mật vật lý | Physical security" />
          <div className={styles.subSectionBlock}>
            <div className={[styles.subSectionTitle, "small-bold color-primary-900"].join(" ")}>
              Bảo mật vật lý | Physical security
            </div>
            <div className={styles.subSectionContent}>
              TaxBook cam kết luôn lựa chọn đối tác tốt nhất và chuyên nghiệp nhất để quản lý và lưu trữ dữ liệu của bạn.
              <ul>
                <li>Lưu trữ tại Viettel Data Center</li>
                <li>Hỗ trợ sự cố 24/7</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.subSection}>
          <div className={styles.subSectionBlock}>
            <div className={[styles.subSectionTitle, "small-bold color-primary-900"].join(" ")}>
            Sao lưu/Khôi phục| Backup/Disaster Recovery
            </div>
            <div className={styles.subSectionContent}>
            Để luôn sẵn sàng cho mọi tình huống, TaxBook xây dựng chế độ sao lưu và khôi phục với thời hạn ở mức tối đa cho khách hàng.
              <ul>
                <li>Sao lưu tự động hàng ngày</li>
                <li>Khách hàng chủ động sao lưu dữ liệu </li>
                <li>Thời gian lưu trữ: sao lưu tự động lên đến 30 ngày, sao lưu chủ động lưu trữ vĩnh viễn.</li>
              </ul>
            </div>
          </div>
          <img src="/imgs/fourth_4.svg" alt="Sao lưu/Khôi phục| Backup/Disaster Recovery" />
        </div>
      </div>
    </>
  );
};
export default FourthSection;
