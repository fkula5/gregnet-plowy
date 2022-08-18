import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faLocationDot,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import Navbar from './navbar';
import logo from '../images/logo.png';

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header className="w-full">
      <div className="header-wrapper px-1 py-5 h-full mx-auto font-bold flex flex-col md:flex-row items-center justify-around relative">
        <a href="http://gregnet.pl/">
          <img src={logo} alt="gregnet-logo" className="logo h-auto" />
        </a>
        <div className="localisation flex items-center gap-2">
          <FontAwesomeIcon icon={faLocationDot} className="local-icon" />
          <span className="text-sm md:text-base lg:text-lg">
            Mikołaja Kopernika 21E <br />
            37-100 Łańcut
          </span>
        </div>
        <div className="phone flex items-center gap-2">
          <FontAwesomeIcon icon={faPhone} className="phone-icon" />
          <span className="text-sm md:text-base lg:text-xl">+48 662257522</span>
        </div>
        <a
          className="ask px-3 py-2 uppercase text-center rounded-md text-sm lg:text-lg"
          href="https://forms.office.com/r/KLc4n4TYPq"
          target="_blank"
          rel="noreferrer"
        >
          Zapytaj o wycenę!
        </a>
        <button
          className="absolute right-5 text-xl md:hidden"
          type="button"
          onClick={toggleNav}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <Navbar props={toggleMenu} />
    </header>
  );
}
