import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import * as Styled from "./FilterPanel.styles";

const FilterPanel = ({ categories, filterOn, activeFilters }) => {
  const [filters, setFilters] = useState(activeFilters);

  useEffect(() => {
    filterOn(filters);
  }, [filterOn, filters]);

  const handleChange = (id) => {
    var list = [...filters];
    if (!list.includes(id)) {
      list.push(id);
      setFilters(list);
    } else {
      setFilters([...filters].filter((filter) => filter !== id));
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
              defaultChecked={filters.includes(category.id)}
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
  activeFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
