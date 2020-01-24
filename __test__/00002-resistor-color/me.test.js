import resistorColor from "../../source/00002-resistor-color/me";

describe("ResistorColor", () => {
  describe("Color codes", () => {
    test("Black", () => {
      expect(resistorColor.colorCode("black")).toEqual(0);
    });

    test("White", () => {
      expect(resistorColor.colorCode("white")).toEqual(9);
    });

    test("Orange", () => {
      expect(resistorColor.colorCode("orange")).toEqual(3);
    });
  });

  test("Colors", () => {
    expect(resistorColor.COLORS).toEqual([
      "black",
      "brown",
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "violet",
      "grey",
      "white",
    ]);
  });
});
