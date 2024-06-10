import React from 'react'
import Navbar from './childrenComponentss/NavSection/Navbar'

function Header() {
    return (
    <div className=' bg-[#303030] text-[#fff]  w-full sm:sticky  top-0 h-[13vh] z-50'>
      <Navbar/>

    </div>
  )
}

export default Header
