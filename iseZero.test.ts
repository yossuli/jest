import { isZero } from "./iseZero";

test("0->true", () => {
  const result = isZero(0);
  expect(result).toBe(true);
});

test("1->false", () => {
  const result = isZero(1);
  expect(result).toBe(false);
});
