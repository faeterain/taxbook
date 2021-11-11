import React from "react"
import Button from 'react-bootstrap/Button'

const Banner = (props) =>{
  return (
    <div  className={"banner header-padding " + props.customClass }>
      <img
        data-aos="fade-left"
        data-aos-duration="400"
        data-aos-easing="ease-in-sine"
        className={["banner-img", props.currentPage===0?"aos-animate":""].join(' ')}
        src="./imgs/banner.png"
        alt="Taxbook"
      />
      <div className="caption">
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="300"
          className={["large-slim", props.currentPage===0?"aos-animate":""].join(' ')}
        >
          Bạn đang cần
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="600"
          className={["large-bold", props.currentPage===0?"aos-animate":""].join(' ')}
        >
          Dịch vụ Kế toán - Thuế
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="900"
          className={["med-bold", props.currentPage===0?"aos-animate":""].join(' ')}
        >
          TaxBook có hơn 500 tổ chức và
          <br /> chuyên gia đối tác trên nền tảng
        </div>
        <Button
          data-aos="fade-up"
          variant="primary"
          size="lg"
          data-aos-duration="500"
          data-aos-delay="1200"
          className={[props.currentPage===0?"aos-animate":""].join(' ')}
        >
          KẾT NỐI NGAY
        </Button>
      </div>
    </div>
  )
}

export default Banner