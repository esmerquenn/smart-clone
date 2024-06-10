import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function NestedLIst({openCategory, handleClick,t, menuDropdownOpen, navListMenuItems, toggleSubMenu, openSubMenu}) {
  return (
    <>
      <span onClick={openCategory}>{t("products")}</span>
            <div className="dropdown">
              <ul className={` transition duration-200 ${!menuDropdownOpen ? 'h-0 opacity-0' : 'h-full opacity-100'}`}>
                {navListMenuItems.map((item, index) => (
                  <li onClick={() => toggleSubMenu(index)} key={item.title} className="dropdown-item text-[.95rem] cursor-pointer">
                    <Link to={`product/${index}`} className="a">
                      {item.title} <FaAngleRight className="text-[.6rem] text-orange-300 hidden lg:block" />
                    </Link>

                    <div className={` pt-1 subdropdown ${openSubMenu === index ? 'block' : 'hidden'}`}>
                      <ul>
                        {item.subcat.map((category) => (
                          <li  key={category}>
                            <Link className="a sub_a">{category}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
    </>
  )
}

export default NestedLIst
