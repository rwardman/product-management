import { sortData } from "./sort";

const testObject = [
  { id: "1", name: "Wire 1m" },
  { id: "4", name: "A big bed" },
  { id: "2", name: "3 Chest of drawers" },
  { id: "3", name: "5 Chest of drawers" },
];

const testObjectWithSize = [
  { id: "1", name: "Wire 10m" },
  { id: "2", name: "5 Chest of drawers" },
  { id: "3", name: "Balloon" },
  { id: "4", name: "3 Chest of drawers" },
  { id: "5", name: "Desk" },
  { id: "6", name: "Table" },
];

const sortedById = [
  { id: "1", name: "Wire 1m" },
  { id: "2", name: "3 Chest of drawers" },
  { id: "3", name: "5 Chest of drawers" },
  { id: "4", name: "A big bed" },
];

const sortedByIdDescending = [
  { id: "4", name: "A big bed" },
  { id: "3", name: "5 Chest of drawers" },
  { id: "2", name: "3 Chest of drawers" },
  { id: "1", name: "Wire 1m" },
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

const sortedBySize = [
  { id: "4", name: "3 Chest of drawers" },
  { id: "2", name: "5 Chest of drawers" },
  { id: "1", name: "Wire 10m" },
  { id: "3", name: "Balloon" },
  { id: "5", name: "Desk" },
  { id: "6", name: "Table" },
];

describe("sortData successfully sorts data", () => {
  it("by Id (Ascending)", () => {
    expect(sortData(testObject, "Id (Ascending)")).toStrictEqual(sortedById);
  });
  it("by Id (Descending)", () => {
    expect(sortData(testObject, "Id (Descending)")).toStrictEqual(
      sortedByIdDescending
    );
  });
  it("by Name (Ascending)", () => {
    expect(sortData(testObject, "Name (Ascending)")).toStrictEqual(
      sortedByNameAscending
    );
  });
  it("by Name (Descending)", () => {
    expect(sortData(testObject, "Name (Descending)")).toStrictEqual(
      sortedByNameDescending
    );
  });
  it("by Size", () => {
    expect(sortData(testObjectWithSize, "Size")).toStrictEqual(sortedBySize);
  });
});
