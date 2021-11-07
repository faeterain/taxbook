import React, { useEffect } from "react"
import AOS from "aos"
import './index.scss'
import "aos/dist/aos.css"
import HomeLayout from "../components/layoutManager/homeLayout/HomeLayout"

export default function Home (props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <HomeLayout title="Home">
        <h2>Home page</h2>
      </HomeLayout>
    </>
  )
}
