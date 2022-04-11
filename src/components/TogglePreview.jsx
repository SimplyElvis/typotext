import { useContext } from "react";
import AppContext from "../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const TogglePreview = () => {
  const { isPreview, setIsPreview } = useContext(AppContext);

  const handlePreview = () => {
    setIsPreview(!isPreview);
    console.log(isPreview);
  };

  return (
    <FontAwesomeIcon
      icon={isPreview ? faEyeSlash : faEye}
      onClick={handlePreview}
      className="icon"
      title={isPreview ? "Hide Preview" : "Preview"}
    />
  );
};

export default TogglePreview;
