import React, { useEffect, useState } from "react"
import AOS from "aos"
import './index.scss'
import "aos/dist/aos.css"
import HomeLayout from "../components/layoutManager/homeLayout/HomeLayout"
import ReactPageScroller from 'react-page-scroller'
import FirstSection from "./Home/FirstSection"
import Banner from "./Home/Banner"
import SecondSection from "./Home/SecondSection"
import ThirdSection from "./Home/ThirdSection"
import FourthSection from "./Home/FourthSection"
import FifthSection from "./Home/FifthSection"



export default function Home (props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [pageNum, setPage] = useState(0);
  const [blockScrollUp, setSCrollUp] = useState(false);
  const [blockScrollDown, setSCrollDown] = useState(false);

  function addAnimate (number) {
    console.log("scroll page"+ number );
    console.log(blockScrollUp)
    console.log(blockScrollDown)
    setPage(number);
    // if(number === 4){
    //   setSCrollUp(true);
    //   setSCrollDown(true);
    // }
  }

  return (
    <>
        <HomeLayout title="Home">
        </HomeLayout>
        <ReactPageScroller blockScrollUp={blockScrollUp} blockScrollDown={blockScrollDown} className="page-scroll" pageOnChange={addAnimate} >
          <Banner />
          <FirstSection currentPage={pageNum} />
          <SecondSection currentPage={pageNum} />
          <ThirdSection currentPage={pageNum} />
          <FourthSection currentPage={pageNum} />
          <FifthSection currentPage={pageNum}/>
        </ReactPageScroller>
    </>
  )
}
