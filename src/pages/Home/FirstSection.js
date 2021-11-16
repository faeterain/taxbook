import React from "react"
import * as styles from "./FirstSection.module.scss"


const FirstSection = (props) =>{
  return (
    <>
      <div className={[styles.sectionBackground + " section-title ", props.customClass?props.customClass:"", props.currentPage===1?"aos-animate":""].join(' ')}
      data-aos="zoom-out"
      data-aos-duration="300">
        <div className={styles.background}>
          <img
          className={styles.decoration}
          src="/imgs/decoration.png"
          alt="Taxbook"
          />
          <img
          className={styles.people}
          src="/imgs/people_illustration.png"
          alt="Taxbook"
          />
        </div>
        <div className={styles.content}>
          <div className={[props.currentPage===1?"aos-animate":"", styles.title, "med-bold color-primary-900"].join(' ')}
          data-aos-delay="200"
          data-aos="fade-left">
            Vì sao TaxBook được cộng đồng <br /> <span className="color-blue-300">doanh nghiệp SME lựa chọn?</span>
          </div>
          <div className={[props.currentPage===1?"aos-animate":"", styles.blockContent].join(' ')}  
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="300">
            {//* block 2
            }
            <div className={styles.blockOfText}>
              <div className={styles.blockTitle}>Kết nối nhanh chóng</div>
              <div className={styles.blockText}>
                TaxBook cung cấp giải pháp giúp doanh nghiệp lựa chọn được đơn vị dịch vụ Kế toán - Thuế <b>phù hợp, tin cậy</b> một cách <b>nhanh chóng và đơn giản. </b>
              </div>
            </div>
            {//*  block 1 
            }
            <div className={styles.blockOfText} >
              <div className={styles.blockTitle}>Am hiểu chuyên môn</div>
              <div className={styles.blockText}>
              <b>Quy trình</b> cung cấp dịch vụ được <b>chuẩn hóa</b> bởi đội ngũ chuyên môn của TaxBook, giúp doanh nghiệp <b>yên tâm</b> khi làm việc với các đối tác dịch vụ và chuyên gia trên nền tảng.
              </div>
            </div>
            {//* block 3
            }
            <div className={styles.blockOfText} style={{marginBottom: 0}}>
              <div className={styles.blockTitle}>Gia tăng hiệu suất</div>
              <div className={styles.blockText}>
                TaxBook ứng dụng những <b>công nghệ tiên tiến nhất</b> vào mỗi sản phẩm để gia tăng <b>tối đa hiệu suất</b> cho doanh nghiệp cũng như các đối tác dịch vụ và chuyên gia.
              </div>
            </div>
            {//* block 4
            }
            <div className={styles.blockOfText} style={{marginBottom: 0}}>
              <div className={styles.blockTitle}>Dữ liệu bảo mật và an toàn</div>
              <div className={styles.blockText}>
                Dữ liệu kế toán <b>thuộc sở hữu của doanh nghiệp</b>, và được TaxBook <b>bảo mật</b> và <b>lưu trữ vĩnh viễn</b> bằng công nghệ đám mây (cloud-based).
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default FirstSection
