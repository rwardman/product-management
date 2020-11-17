import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import * as Styled from "./FilterPanel.styles";

const FilterPanel = ({ categories, filterOn }) => {
  const [activeFilters, setActiveFilters] = useState([]);

  useEffect(() => {
    filterOn(activeFilters);
  }, [filterOn, activeFilters]);

  const handleChange = (id) => {
    var list = [...activeFilters];
    if (!list.includes(id)) {
      list.push(id);
      setActiveFilters(list);
    } else {
      setActiveFilters([...activeFilters].filter((word) => word !== id));
    }
  };

  return (
    <Styled.Form>
      <Styled.Label>
        <Styled.FilterTitle>Filter</Styled.FilterTitle>
        {categories.map((category) => (
          <label key={category.id}>
            {category.name}
            <input
              name={category.name}
              type="checkbox"
              onClick={() => handleChange(category.id)}
            />
          </label>
        ))}
      </Styled.Label>
    </Styled.Form>
  );
};

export default FilterPanel;

FilterPanel.propTypes = {
  filterOn: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
