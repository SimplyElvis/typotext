import { faFloppyDisk } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SaveButton = () => {
  return (
    <button className="button button_save">
      <FontAwesomeIcon icon={faFloppyDisk} className="icon" />
      <span>Save Changes</span>
    </button>
  );
};

export default SaveButton;
