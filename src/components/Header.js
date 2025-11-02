import "./Header.css";
import searchIcon from "../images/search-icon.svg";
import heartIcon from "../images/heart-icon.svg";
import shoppingBagIcon from "../images/shopping-bag.svg";
import userIcon from "../images/profile-icon.svg";
import dropdownIcon from "../images/dropdown-icon.svg";
import { ReactComponent as HeaderLogo } from "../images/header-logo.svg";
import {ReactComponent as PuzzleIcon} from "../images/puzzle-icon.svg";

function Header() {
  return (
    <>
      <div className="top-strip">
        <div className="strip-item">
          <span className="icon"><PuzzleIcon /></span>
          <span>Lorem ipsum dolor</span>
        </div>
        <div className="strip-item">
          <span className="icon"><PuzzleIcon /></span>
          <span>Lorem ipsum dolor</span>
        </div>
        <div className="strip-item">
          <span className="icon"><PuzzleIcon /></span>
          <span>Lorem ipsum dolor</span>
        </div>
      </div>

      <header className="header">
        <div className="header-left">
          <button className="menu-icon">☰</button>
          <div className="logo-icon"><HeaderLogo /> </div>
        </div>

        <div className="header-center">
          <div className="logo">LOGO</div>
        </div>

        <div className="header-right">
          <button className="icon-btn">
            <img src={searchIcon} alt="Search Icon" />
          </button>
          <button className="icon-btn">
            <img src={heartIcon} alt="Heart Icon" />
          </button>
          <button className="icon-btn">
            <img src={shoppingBagIcon} alt="Shopping Bag" />
          </button>
          <button className="icon-btn">
            <img src={userIcon} alt="Profile" />
          </button>
          <div className="language-selector">
            <span>ENG</span>
                      <span className="arrow-down"><img src={dropdownIcon} alt="dropdown"/></span>
          </div>
        </div>
      </header>

      <nav className="nav-tabs">
        <a href="#shop" className="nav-link active">
          SHOP
        </a>
        <a href="#skills" className="nav-link">
          SKILLS
        </a>
        <a href="#stories" className="nav-link">
          STORIES
        </a>
        <a href="#about" className="nav-link">
          ABOUT
        </a>
        <a href="#contact" className="nav-link">
          CONTACT US
        </a>
      </nav>
    </>
  );
}

export default Header;
