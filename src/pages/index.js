<<<<<<< HEAD
import * as React from 'react'
import { Link } from 'gatsby'

export default function Home (props) {
  return (
    <>
      <h1>Rendering Modes Starter</h1>
      <ul>
        <li>
          <Link to='/dsg'>DSG page</Link>
        </li>
        <li>
          <Link to='/ssr'>SSR page</Link>
        </li>
      </ul>
=======
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
>>>>>>> 19b22ef328525b55670769cb23fffe0e8580833e
    </>
  )
}
