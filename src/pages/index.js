import React, { useEffect, useState } from "react"
import AOS from "aos"
import './index.scss'
import "aos/dist/aos.css"
import HomeLayout from "../components/layoutManager/homeLayout/HomeLayout"
import ReactPageScroller from 'react-page-scroller'
import FirstSection from "./Home/FirstSection"
import Banner from "./Home/Banner"
import SecondSection from "./Home/SecondSection"



export default function Home (props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [pageNum, setPage] = useState(0);

  function addAnimate (number) {
    console.log("scroll page"+ number );
    setPage(number);
  }

  return (
    <>
        <HomeLayout title="Home">
        </HomeLayout>
        <ReactPageScroller className="page-scroll" pageOnChange={addAnimate} >
          <Banner />
          <FirstSection currentPage={pageNum} customClass="margin-header" />
          <SecondSection />
        </ReactPageScroller>
    </>
  )
}
