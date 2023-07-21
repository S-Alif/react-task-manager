import { useState, useEffect } from "react";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";


const Header = () => {

  // for darkmode
  const [mode, setMode] = useState(() => {
    if (localStorage.getItem("mode")) {
      return JSON.parse(localStorage.getItem('mode'))
    }
    else {
      return "light"
    }
  })

  // save mode on localStorage
  useEffect(() => {
    localStorage.setItem('mode', JSON.stringify(mode))
  })

  // get mode from localStorage
  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem('mode'))
    if (theme) {
      setMode(theme)
    }
  }, []);

  let toggleMode = (theme) => {
    setMode(theme)
    document.querySelector("html").setAttribute("data-bs-theme", theme)
  }
  
  return (
    <>
      <header>
        <div className="container text-end">
          <button className="btn" onClick={() => { mode == "light" ? toggleMode("dark") : toggleMode("light") }}>Theme : <span>{mode == "light" ? <BsMoonStarsFill /> : <BsSunFill />}</span></button>
        </div>
      </header>
    </>
  );
};

export default Header;