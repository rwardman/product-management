export const sortByNumber = (key) => {
  return function (a, b) {
    return a[key] - b[key];
  };
};

export const sortByString = (key, order = "asc") => {
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

export const sortBySize = (key) => {
  return function (a, b) {
    var nameA = a[key].toUpperCase();
    var nameB = b[key].toUpperCase();
    return Number(nameA.match(/(\d+)/g)) - Number(nameB.match(/(\d+)/g));
  };
};
