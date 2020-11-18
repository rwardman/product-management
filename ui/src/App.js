import React, { useState, useEffect } from "react";
import axios from "axios";

import ProductCard from "./components/ProductCard/ProductCard";
import Header from "./components/Header/Header";
import SortBy from "./components/SortBy/SortBy";
import FilterPanel from "./components/FilterPanel/FilterPanel";
import NoResults from "./components/NoResults/NoResults";

import { sortData } from "./helpers/sort";

import * as Styled from "./App.styles";

function App() {
  const [productData, setProductData] = useState(() =>
    JSON.parse(localStorage.getItem("product_data"))
  );
  const [filteredProductData, setFilteredProductData] = useState([]);

  const [categories, setCategories] = useState(() =>
    JSON.parse(localStorage.getItem("categories"))
  );

  const [chosenOption, setChosenOption] = useState(() => {
    const option = JSON.parse(localStorage.getItem("chosen_option"))
      ? JSON.parse(localStorage.getItem("chosen_option"))
      : "Id (Ascending)";
    return option;
  });
  const [activeFilters, setActiveFilters] = useState(() => {
    const option = JSON.parse(localStorage.getItem("active_filters"))
      ? JSON.parse(localStorage.getItem("active_filters"))
      : [];
    return option;
  });

  const sortByOptions = [
    "Id (Ascending)",
    "Id (Descending)",
    "Name (Ascending)",
    "Name (Descending)",
    "Size",
  ];

  useEffect(() => {
    console.log("rendre");
    if (productData === null && categories === null) {
      axios.all([axios.get("/products"), axios.get("/categories")]).then(
        axios.spread((...responses) => {
          setProductData(responses[0].data.data);
          setCategories(responses[1].data.data);
        })
      );
    }

    localStorage.setItem("categories", JSON.stringify(categories));
    localStorage.setItem("product_data", JSON.stringify(productData));
  }, [productData, categories]);

  useEffect(() => {
    localStorage.setItem("chosen_option", JSON.stringify(chosenOption));
    localStorage.setItem("active_filters", JSON.stringify(activeFilters));

    if (productData != null) {
      const sortedData = sortData([...productData], chosenOption);

      if (activeFilters.length === 0) {
        setFilteredProductData(sortedData);
      } else {
        const filteredData = sortedData.filter(({ categoryId }) =>
          activeFilters.includes(categoryId)
        );
        setFilteredProductData(filteredData);
      }
    }
  }, [activeFilters, chosenOption, productData]);

  const getCategoryName = (categoryId) => {
    const result = categories.find(({ id }) => id === categoryId);
    return result.name;
  };

  const filterOn = (activeFilters) => {
    setActiveFilters(activeFilters);
  };

  const sortBy = (chosenOption) => {
    setChosenOption(chosenOption);
  };

  return (
    <div className="App">
      <Header title={"Product Management"} />
      <Styled.MainContainer>
        <Styled.SortByContainer>
          {categories && (
            <>
              <FilterPanel
                categories={categories}
                filterOn={filterOn}
                activeFilters={activeFilters}
              />
              <SortBy
                options={sortByOptions}
                sortBy={sortBy}
                chosenOption={chosenOption}
              />
            </>
          )}
        </Styled.SortByContainer>

        <Styled.ProductCardsContiner>
          {categories && filteredProductData.length === 0 ? (
            <NoResults />
          ) : (
            filteredProductData.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                category={getCategoryName(product.categoryId)}
                creationDate={product.creationDate}
                updateDate={product.updateDate}
                lastPurchasedDate={product.lastPurchasedDate}
              />
            ))
          )}
        </Styled.ProductCardsContiner>
      </Styled.MainContainer>
    </div>
  );
}

export default App;
