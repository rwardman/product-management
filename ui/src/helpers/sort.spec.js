import { sortByNumber, sortByString, sortBySize } from "./sort";

const testObject = [
  { id: "1", name: "Wire 1m" },
  { id: "4", name: "A big bed" },
  { id: "2", name: "3 Chest of drawers" },
  { id: "3", name: "5 Chest of drawers" },
];

const sortedById = [
  { id: "1", name: "Wire 1m" },
  { id: "2", name: "3 Chest of drawers" },
  { id: "3", name: "5 Chest of drawers" },
  { id: "4", name: "A big bed" },
];

const sortedByNameAscending = [
  { id: "2", name: "3 Chest of drawers" },
  { id: "3", name: "5 Chest of drawers" },
  { id: "4", name: "A big bed" },
  { id: "1", name: "Wire 1m" },
];

const sortedByNameDescending = [
  { id: "1", name: "Wire 1m" },
  { id: "4", name: "A big bed" },
  { id: "3", name: "5 Chest of drawers" },
  { id: "2", name: "3 Chest of drawers" },
];

const testObjectsWithSize = [
  { id: "1", name: "Wire 10m" },
  { id: "2", name: "3 Chest of drawers" },
  { id: "3", name: "5 Chest of drawers" },
];

const sortedBySize = [
  { id: "1", name: "Wire 10m" },
  { id: "2", name: "3 Chest of drawers" },
  { id: "3", name: "5 Chest of drawers" },
];

describe("The sortNumbers comparator successfully sorts by number when a number key is passed to it", () => {
  it("sorts the object by the given key", () => {
    expect(testObject.sort(sortByNumber("id"))).toStrictEqual(sortedById);
  });
});

describe("The sortStrings comparator successfully sorts by string", () => {
  describe("when no order parameter is passed", () => {
    it("should sort in ascending order", () => {
      expect(testObject.sort(sortByString("name"))).toStrictEqual(
        sortedByNameAscending
      );
    });
  });
  describe("when the desc order parameter is passed", () => {
    it("should in descending order", () => {
      expect(testObject.sort(sortByString("name", "desc"))).toStrictEqual(
        sortedByNameDescending
      );
    });
  });
});

describe("The sortBySize comparator successfully sorts by size", () => {
  it("sorts the objects based on size", () => {
    expect(testObjectsWithSize.sort(sortBySize("id"))).toStrictEqual(
      sortedBySize
    );
  });
});
