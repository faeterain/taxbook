import React, { useEffect } from "react"
import AOS from "aos"
import './index.scss'
import "aos/dist/aos.css"
import HomeLayout from "../components/layoutManager/homeLayout/HomeLayout"
import ReactPageScroller from 'react-page-scroller'
import FirstSection from "./Home/FirstSection"
import Banner from "./Home/Banner"

export default function Home (props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
        <HomeLayout title="Home">
          <ReactPageScroller>
            <Banner />
            <FirstSection customClass="margin-header" />
          </ReactPageScroller>
        </HomeLayout>
    </>
  )
}
