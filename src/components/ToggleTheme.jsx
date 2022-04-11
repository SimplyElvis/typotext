import { useContext } from "react";
import AppContext from "../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";

const ToggleTheme = () => {
  const { setTheme, theme } = useContext(AppContext);

  function toggleTheme() {
    const currentTheme = theme === "dark" ? "light" : "dark";
    setTheme(currentTheme);
  }

  return (
    <FontAwesomeIcon icon={faEye} className="icon" onClick={toggleTheme} />
  );
};

export default ToggleTheme;
