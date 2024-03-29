import React from "react";
import * as styles from "./SecondSection.module.scss";
import "../../custom/CustomAccordion.scss";
import { useAccordionButton, Accordion, Card, Button } from "react-bootstrap";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: "pink" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const SecondSection = (props) => {
  return (
    <>
      <div className={styles.sectionBackground}>
        <div className={styles.content}>
          <div
            className={[
              props.currentPage === 1 ? "aos-animate" : "",
              styles.title,
            ].join(" ")}
          >
            Nhanh chóng chọn được đơn vị dịch vụ <br />
            Kế toán - Thuế với <b className="highlight-text">3 bước đơn giản</b>
          </div>
          <div className={styles.blockContent}>
            <Accordion
              defaultActiveKey="1"
              flush
            >
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <CustomToggle
                    eventKey="0"
                  ></CustomToggle>{" "}
                  Cung cấp thông tin
                </Accordion.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    In minim eiusmod et duis nostrud enim consequat duis. Anim
                    excepteur culpa ut irure do ut ullamco commodo sint.
                    Excepteur in occaecat qui dolore excepteur exercitation
                    exercitation labore enim qui sunt velit deserunt. Eiusmod
                    cillum in elit id sit sunt excepteur nisi ullamco laborum
                    non. Laboris sit dolore quis. Ullamco commodo non
                    exercitation duis sunt esse consectetur occaecat in aliqua.
                    Velit ad incididunt reprehenderit id nulla ut in esse.
                  </Card.Body>
                </Accordion.Collapse>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <CustomToggle
                    eventKey="1"
                  ></CustomToggle>{" "}
                  Nhận chào giá
                </Accordion.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    Sau khi nhận yêu cầu, TaxBook sẽ chuyển thông tin đến 05 đối
                    tác dịch vụ phù hợp nhất trên nền tảng để chào giá. Chủ
                    doanh nghiệp sẽ nhận được chào giá cũng như thông tin về đối
                    tác dịch vụ qua email, trong tối đa là 24 giờ.
                  </Card.Body>
                </Accordion.Collapse>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <CustomToggle
                    eventKey="2"
                  ></CustomToggle>{" "}
                  Lựa chọn đối tác
                </Accordion.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    Sau khi nhận yêu cầu, TaxBook sẽ chuyển thông tin đến 05 đối
                    tác dịch vụ phù hợp nhất trên nền tảng để chào giá. Chủ
                    doanh nghiệp sẽ nhận được chào giá cũng như thông tin về đối
                    tác dịch vụ qua email, trong tối đa là 24 giờ.
                  </Card.Body>
                </Accordion.Collapse>
              </Accordion.Item>
            </Accordion>
            
            <Button
              variant="primary"
              size="lg"
              className={[props.currentPage===2?"aos-animate":"", styles.btn].join(' ')}
            >
              KẾT NỐI NGAY
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default SecondSection;
