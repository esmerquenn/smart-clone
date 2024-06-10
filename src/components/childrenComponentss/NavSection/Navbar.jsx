import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { useTranslation } from "react-i18next";
import { IoMdExit } from "react-icons/io";
import LangSelect from "./LangSelect";
import NestedLIst from "./NestedLIst";
import { useGetProductsQuery } from "../../../api/slices/allProduct";
import SearchComponent from "./SearchComponent";

const navListMenuItems = [
  {
    title: "Elektrik Avadanlıqları",
    subcat: ["Vklucatel", "Rozetka", "Avtomat acarlar", "Qaraj qapısı ", " Kiçik Modul", "Pərdə motoru ", "Jaluz motoru"],
  },
  {
    title: "İşıqlandırma",
    subcat: ["Tavan ", "Led şərit ", "Lampa", "Divar ", "Cöl isiqları"],
  },
  {
    title: "Sensorlar",
    subcat: ["Su", "Qaz", "Tüstü və alov ", "Hərəkət", "İnsan varlığı", " Temperatur və nəm", "Qapı Pəncərə"],
  },
  {
    title: "Kamera və təhlükəsizlik",
    subcat: [
      "Əsas idarə paneli",
      "Ağıllı kamera",
      "PTZ kamera",
      "Kameralı qapı zəngi",
      "DVR",
      "Proyeksiya",
      "Əsas qapı kilidi",
      " Otaq qapı kilidi ",
      "Pəncərə kilidi",
      "Kiçik kilidlər ",
      "Qaz və su kranı",
      "otaq havalandırma",
      "Hamam havalandırma",
    ],
  },
  {
    title: "Şəbəkə və paylayıcılar",
    subcat: ["Əsas paylayıcı", "Modem və router", "Zigbee paylayı", " Wifi paylayicı"],
  },
  {
    title: "Termostatlar",
    subcat: ["Kombi", "Ariston", "Kondisioner", "Yerdən isitmə"],
  },
  {
    title: "mətbəx texnikasi",
    subcat: ["Fritoz bişirici", "Kofe aparatı", " Tozsoran", "Otaq nəmləndirici"],
  },
];

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuDropdownOpen, setMenuDropdownOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [langCode, setLangCode] = useState(2);
  const { data: products, error, isLoading } = useGetProductsQuery(langCode);
  const { t, i18n } = useTranslation();

  const changeLanguages = async (lang) => {
    console.log(t("home_page"));
    await i18n.changeLanguage(lang);
    setLangCode(lang === "az" ? 1 : 2);
    setDropdownOpen(false);
    console.log(products);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 992);
    };
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setMenuOpen(false);
        document.body.classList.remove("menu-open");
      }
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isSmallScreen) {
      setMenuDropdownOpen(true);
    }
  }, [isSmallScreen]);

  const openCategory = () => {
    if (!isSmallScreen) {
      setMenuDropdownOpen(true);
    } else {
      setMenuDropdownOpen((prev) => !prev);
    }
  };

  const toggleSubMenu = (index) => {
    if (openSubMenu === index) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(index);
    }
  };
  const handleSearch = (query) => {
    console.log("Arama sorgusu:", query);
    // Burada veritabanında arama yapabilirsin
  };
  const navigate = useNavigate();
  const handleClick = (id) => {
    console.log(id, 'id');
    navigate(`/product/${id}`);
  };

  return (
    <nav className="  px-5 md:px-10 relative">
      <Link to="/" className="logo">
        <img src="" alt="" /> Smart sistems
      </Link>
      <div
        className={`menu z-50 transition-all duration-500 absolute top-0  bg w-64 min-h-[100vh] pt-16 pl-5 lg:pt-0 lg:w-[initial] lg:min-h-[initial] lg:bg-[#ff000000] lg:static ${
          menuOpen ? " left-0" : "left-[-100%]"
        }`}
      >
        <IoMdExit onClick={toggleMenu} className=" lg:hidden absolute top-8 right-6 text-[1.25rem]" />
        <ul className="w-[80%] lg:w-[initial]  lg:flex">
          <li className=" relative text-[1.25rem] hover-underline cursor-pointer">
            <Link to="/">{t("home_page")}</Link>
          </li>
          <li className="relative text-[1.25rem] hover-underline cursor-pointer">
            <NestedLIst {...{ openCategory,handleClick, t, menuDropdownOpen, navListMenuItems, toggleSubMenu, openSubMenu }} />
          </li>
          <li className="relative text-[1.25rem] hover-underline cursor-pointer">
            <Link to="/service">{t("service")}</Link>
          </li>
          <li className="relative text-[1.25rem] hover-underline cursor-pointer">
            <Link to="/about">{t("about")}</Link>
          </li>
          <li className="relative text-[1.25rem] hover-underline cursor-pointer">
            <Link to="/contact">{t("contact")}</Link>
          </li>
        </ul>
      </div>
      <div className=" flex z-10 items-center justify-between w-28 lg:w-[7%] pr-[40px]">
        <div className=" order-3 bg-orange-400 p-1 w-9 h-9 rounded-sm lg:hidden">
          <HiMiniBars3CenterLeft onClick={toggleMenu} className="text-[1.7rem]" />
        </div>

        <div style={{ paddingRight: "10px" }}>
          <SearchComponent onSearch={handleSearch} />
        </div>

          <LangSelect {...{ changeLanguages, toggleDropdown, i18n, dropdownOpen }} />
      </div>
      <div className={`navbar-backdrop ${menuOpen ? "active" : ""}`} onClick={toggleMenu}></div>
    </nav>
  );
}

export default Navbar;
