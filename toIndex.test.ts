import { toIndex } from "./toIndex";

test("0 % 5", () => {
  const result = toIndex(0, 5);
  expect(result).toBe(0);
});

test("13 % 5", () => {
  const result = toIndex(13, 5);
  expect(result).toBe(3);
});

test("-1 % 5", () => {
  const result = toIndex(-1, 5);
  expect(result).toBe(-1);
});

test("-11 % 5", () => {
    const result = toIndex(-1, 5);
    expect(result).toBe(-1);
  });
  