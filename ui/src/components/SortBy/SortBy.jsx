import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
import * as Styled from "./SortBy.styles";

const SortBy = ({ options, sortBy, chosenOption }) => {
  const [value, setValue] = useState(chosenOption);

  useEffect(() => {
    sortBy(value);
  }, [sortBy, value]);

  return (
    <Styled.Form>
      <label>
        Sort By:
        <Styled.Select
          value={chosenOption}
          onChange={(e) => setValue(e.target.value)}
        >
          {options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </Styled.Select>
      </label>
    </Styled.Form>
  );
};

export default SortBy;

SortBy.propTypes = {
  options: PropTypes.array.isRequired,
  sortBy: PropTypes.func.isRequired,
  chosenOption: PropTypes.string.isRequired,
};
