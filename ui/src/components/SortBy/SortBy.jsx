import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";

const SortBy = ({ options, sortBy }) => {
  const [chosenOption, setChosenOption] = useState(options[0]);

  useEffect(() => {
    sortBy(chosenOption);
  }, [chosenOption, sortBy]);

  return (
    <form>
      <label>
        Sort By:
        <select
          value={chosenOption}
          onChange={(e) => setChosenOption(e.target.value)}
        >
          {options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
};

export default SortBy;

SortBy.propTypes = {
  options: PropTypes.array.isRequired,
  sortBy: PropTypes.func.isRequired,
};
