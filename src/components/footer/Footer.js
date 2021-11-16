import React from "react"
import * as styles from "./Footer.module.scss"

const Footer = ()=>{
    return (
        <div className={styles.footer} >
          <div className={styles.footerBody}>
            <img src="icons/logo.png" alt="Taxbook" />
            <div className={styles.footerItem}>
              <div className={styles.itemTitle}>
                Về Taxbook
              </div>
              <ul>
                <li>
                  Tầm nhìn & Sứ mệnh
                </li>
                <li>
                  Cơ hội nghề nghiệp
                </li>
              </ul>
            </div>
            <div className={styles.footerItem}>
              <div className={styles.itemTitle}>
                Sản phẩm
              </div>
              <ul>
                <li>
                  Taxbook App
                </li>
                <li>
                  Taxbook Accounting
                </li>
                <li>
                  Thỏa thuận quyền sử dụng
                </li>
                <li>
                  Chính sách quyền riêng tư
                </li>
              </ul>
            </div>
            <div className={styles.footerItem}>
              <div className={styles.itemTitle}>
                Hỗ trợ
              </div>
              <ul>
                <li>
                  Liên hệ
                </li>
                <li>
                  FAQ
                </li>
                <li>
                  Thư viện
                </li>
              </ul>
            </div>
            <div className={styles.social}>
              <div className={styles.itemTitle}>Social</div>
                <div className={styles.iconList}>
                  <img src="/imgs/Zalo.svg" alt="Zalo" />
                  <img src="/imgs/Facebook.svg" alt="Facebook" />
                  <img src="/imgs/LinkedIn.svg" alt="LinkedIn" />
                  <img src="/imgs/Youtube.svg" alt="Youtube" />
                  <img src="/imgs/Twitter.svg" alt="Twitter" />
                </div>
              </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.desc}>
            Copyright © by 2020 All rights reserved by Taxbook.vn
          </div>
        </div>
    )
}


export default Footer