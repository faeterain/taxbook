import React from "react"
import * as styles from "./FirstSection.module.scss"


const FirstSection = (props) =>{
  return (
    <>
      <div className={[styles.sectionBackground + " " + props.customClass, props.currentPage===1?"aos-animate":""].join(' ')}
      data-aos="zoom-out"
      data-aos-duration="800">
        <div className={styles.content}>
          <div className={[props.currentPage===1?"aos-animate":"", styles.title].join(' ')}
          data-aos-delay="500"
          data-aos="fade-left">
            Vì sao <b className="highlight-text">TaxBook</b> được cộng đồng <br /> doanh nghiệp SME lựa chọn?
          </div>
          <div className={[props.currentPage===1?"aos-animate":"", styles.blockContent].join(' ')}  
          data-aos="fade-up"
          data-aos-delay="700"
          data-aos-duration="800">
            {//*  block 1 
            }
            <div className={styles.blockOfText}>
              <div className={styles.blockTitle}>Am hiểu chuyên môn</div>
              <div className={styles.blockText}>
                Không chỉ là trải nghiệm hoàn toàn mới, TaxBook cung cấp giải pháp giúp doanh nghiệp lựa chọn được đơn vị cung cấp dịch vụ Kế toán - Thuế phù hợp, tin cậy một cách nhanh chóng và đơn giản. 
              </div>
            </div>
            {//* block 2
            }
            <div className={styles.blockOfText}>
              <div className={styles.blockTitle}>Kết nối nhanh chóng</div>
              <div className={styles.blockText}>
                Chương trình đào tạo, khảo sát chất lượng định kỳ và quy trình cung cấp dịch vụ được chuẩn hóa bởi đội ngũ chuyên môn của TaxBook, giúp doanh nghiệp yên tâm khi làm việc với các đối tác dịch vụ và chuyên gia trên nền tảng.
              </div>
            </div>
            {//* block 3
            }
            <div className={styles.blockOfText}>
              <div className={styles.blockTitle}>Gia tăng hiệu suất</div>
              <div className={styles.blockText}>
                TaxBook không ngừng nghiên cứu và ứng dụng các công nghệ tiên tiến nhất vào mỗi sản phẩm, với mục tiêu gia tăng tối đa hiệu suất công việc của doanh nghiệp cũng như các đối tác dịch vụ và chuyên gia.
              </div>
            </div>
            {//* block 4
            }
            <div className={styles.blockOfText}>
              <div className={styles.blockTitle}>Dữ liệu bảo mật và an toàn</div>
              <div className={styles.blockText}>
                Sự bảo mật thông tin doanh nghiệp là yếu tố được TaxBook đặt lên hàng đầu. Ngoài ra, dữ liệu kế toán thuộc sở hữu của doanh nghiệp, và được TaxBook lưu trữ vĩnh viễn bằng công nghệ đám mây (cloud-based).
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default FirstSection
