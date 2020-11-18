export const sortData = (data, chosenOption) => {
  switch (chosenOption) {
    case "Id (Ascending)":
      return data.sort(sortByNumber("id"));

    case "Id (Descending)":
      return data.sort(sortByNumber("id", "desc"));

    case "Name (Ascending)":
      return data.sort(sortByString("name"));

    case "Name (Descending)":
      return data.sort(sortByString("name", "desc"));

    case "Size":
      var productsWithSize = data.filter((product) =>
        product.name.match(/(\d+)/g)
      );
      productsWithSize.sort(sortBySize("name"));

      var productsWithoutSize = data
        .filter((product) => !product.name.match(/(\d+)/g))
        .sort(sortByString("name"));

      return productsWithSize.concat(productsWithoutSize);
    default:
      return data;
  }
};

const sortByNumber = (key, order = "asc") => {
  return function (a, b) {
    const comparator = a[key] - b[key];
    return order === "desc" ? comparator * -1 : comparator;
  };
};

const sortByString = (key, order = "asc") => {
  return function compare(a, b) {
    var valueA = a[key].toUpperCase();
    var valueB = b[key].toUpperCase();

    let comparator = 0;
    if (valueA < valueB) {
      comparator = -1;
    }
    if (valueA > valueB) {
      comparator = 1;
    }

    return order === "desc" ? comparator * -1 : comparator;
  };
};

const sortBySize = (key) => {
  return function (a, b) {
    var nameA = a[key].toUpperCase();
    var nameB = b[key].toUpperCase();
    return Number(nameA.match(/(\d+)/g)) - Number(nameB.match(/(\d+)/g));
  };
};
