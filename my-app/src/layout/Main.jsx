// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar';

const Main = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <footer>Footer</footer>
    </>
  )
}

export default Main;
