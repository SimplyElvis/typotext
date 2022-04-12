import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";

const DocumentInfo = () => {
  return (
    <section className="document-info">
      <FontAwesomeIcon icon={faFileAlt} className="icon" />
      <span>
        <p>Document Name</p>
        <h4>Welcome.md</h4>
      </span>
    </section>
  );
};

export default DocumentInfo;
