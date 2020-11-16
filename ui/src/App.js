import React, { useState, useEffect } from "react";
import axios from "axios";

import ProductCard from "./components/ProductCard/ProductCard";
import Header from "./components/Header/Header";
import SortBy from "./components/SortBy/SortBy";
import FilterPanel from "./components/FilterPanel/FilterPanel";

import { sortStrings, sortNumbers, sortBySize } from "./helpers/sort";

import * as Styled from "./App.styles";

function App() {
  const [productData, setProductData] = useState(null);
  const [filteredProductData, setFilteredProductData] = useState(null);
  const [categories, setCategories] = useState(null);
  const [chosenOption, setChosenOption] = useState("Id");
  const [activeFilters, setActiveFilters] = useState([]);

  const sortByOptions = ["Id", "Name (Ascending)", "Name (Descending)", "Size"];

  useEffect(() => {
    if (productData === null && categories === null) {
      axios.all([axios.get("/products"), axios.get("/categories")]).then(
        axios.spread((...responses) => {
          setProductData(responses[0].data.data);
          setCategories(responses[1].data.data);
        })
      );
    }
  }, [productData, categories]);

  useEffect(() => {
    const sortArray = (option) => {
      if (productData !== null) {
        switch (option) {
          case "Id":
            setProductData([...productData].sort(sortNumbers("id")));
            break;

          case "Name (Ascending)":
            setProductData([...productData].sort(sortStrings("name")));
            break;

          case "Name (Descending)":
            setProductData([...productData].sort(sortStrings("name", "desc")));
            break;

          case "Size":
            var productsWithSize = [...productData].filter((product) =>
              product.name.match(/(\d+)/g)
            );
            productsWithSize.sort(sortBySize("name"));

            var productsWithoutSize = [...productData]
              .filter((product) => !product.name.match(/(\d+)/g))
              .sort(sortStrings("name"));

            setProductData(productsWithSize.concat(productsWithoutSize));
            break;

          default:
            break;
        }
      }
      localStorage.setItem("product_data", JSON.stringify(productData));
    };

    sortArray(chosenOption);
  }, [chosenOption]);

  useEffect(() => {
    if (productData !== null) {
      const result = productData.filter(({ categoryId }) =>
        activeFilters.includes(categoryId)
      );
      if (result.length === 0 && activeFilters.length === 0) {
        setFilteredProductData(productData);
      } else {
        setFilteredProductData(result);
      }
    }
  }, [activeFilters]);

  const getCategoryName = (categoryId) => {
    const result = categories.find(({ id }) => id === categoryId);
    return result.name;
  };

  const updateOption = (option) => {
    setChosenOption(option);
  };

  const filterOn = (activeFilters) => {
    setActiveFilters(activeFilters);
  };

  return (
    <div className="App">
      <Header />
      <Styled.MainContainer>
        <Styled.SortByContainer>
          {categories && (
            <>
              <FilterPanel categories={categories} filterOn={filterOn} />
              <SortBy options={sortByOptions} sortBy={updateOption} />
            </>
          )}
        </Styled.SortByContainer>

        <Styled.ProductCardsContiner>
          {filteredProductData &&
            categories &&
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
            ))}
        </Styled.ProductCardsContiner>
      </Styled.MainContainer>
    </div>
  );
}

export default App;
