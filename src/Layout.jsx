import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import './App.css'



function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default Layout
