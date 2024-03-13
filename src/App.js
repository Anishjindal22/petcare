import React from 'react'
import "./App.css"
import { Navbar } from './components/common/Navbar'
import {Routes,Route } from "react-router-dom"
import Home from './components/core/HomePage/Home'
export const App = () => {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path='/' index element={<Home/>}/>
    </Routes>
    </div>
  )
}
