import React from "react"
import Button from 'react-bootstrap/Button'

const Banner = (props) =>{
  return (
    <div  className={"banner header-padding " + props.customClass }>
      <img
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="500"
        data-aos-easing="ease-in-sine"
        className="banner-img"
        src="./imgs/banner.png"
        alt="Taxbook"
      />
      <div className="caption">
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="800"
          className="large-slim"
        >
          Bạn đang cần
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1300"
          className="large-bold"
        >
          Dịch vụ Kế toán - Thuế
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1800"
          className="med-bold"
        >
          TaxBook có hơn 500 tổ chức và
          <br /> chuyên gia đối tác trên nền tảng
        </div>
        <Button
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="2300"
          variant="primary"
          size="lg"
        >
          KẾT NỐI NGAY
        </Button>
      </div>
    </div>
  )
}

export default Banner