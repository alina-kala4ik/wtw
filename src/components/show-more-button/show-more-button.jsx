import React from "react";
import PropTypes from "prop-types";

const ShowMoreButton = (props) => {
  const {handlerShowMoreClick} = props;

  return (
    <div className="catalog__more">
      <button
        onClick={handlerShowMoreClick}
        className="catalog__button"
        type="button">
        Show more
      </button>
    </div>
  );
};

ShowMoreButton.propTypes = {
  handlerShowMoreClick: PropTypes.func.isRequired
};

export default ShowMoreButton;
