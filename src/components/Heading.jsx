// import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import SaveButton from "./SaveButton";
// import DocumentInfo from "./DocumentInfo";
import ToggleTheme from "./ToggleTheme";

const Heading = () => {
  // function handleMenu(event) {
  //   console.log(event);
  // }

  return (
    <header className="header">
      <span className="header_menu">
        {/* <button
          className="button button_menu"
          onClick={handleMenu}
          ref={menuRef}
        >
          <FontAwesomeIcon icon={faBars} />
        </button> */}
        <span>
          <h2>TypoText</h2>
        </span>
        <span className="header_divider"></span>
        {/* <DocumentInfo /> */}
      </span>
      <ToggleTheme />
      {/* <span className="header_action">
        <FontAwesomeIcon icon={faTrashCan} className="icon" />
        <SaveButton />
      </span> */}
    </header>
  );
};

export default Heading;
