import React from "react"
import Button from 'react-bootstrap/Button'

const Banner = (props) =>{
  return (
    <div  className={"banner header-padding " + props.customClass }>
      <img
        className={["banner-img", props.currentPage===0?"aos-animate":""].join(' ')}
        src="./imgs/banner.svg"
        alt="Taxbook"
      />
      <div className="caption">
        <div  className={["small-black", props.currentPage===0?"aos-animate":""].join(' ')} style={{marginBottom:'24px'}}>
          Xin chào,
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="300"
          className={["large-bold", props.currentPage===0?"aos-animate":""].join(' ')}
        >
          Bạn đang cần
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="600"
          className={["large-bold color-blue-300", props.currentPage===0?"aos-animate":""].join(' ')}
          style={{marginBottom:'24px'}}
        >
          Dịch vụ Kế toán - Thuế?
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="900"
          className={["med-med", props.currentPage===0?"aos-animate":""].join(' ')}
          style={{marginBottom:'40px'}}
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