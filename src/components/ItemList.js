import React from "react";
import PropTypes from "prop-types";

function itemList({ tech, handleDelete }) {
  return (
    <li>
      {tech}
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}

itemList.defaultProps = {
  tech: "Tecnologia oculta"
};

itemList.propTypes = {
  tech: PropTypes.string,
  handleDelete: PropTypes.func.isRequired
};

export default itemList;
