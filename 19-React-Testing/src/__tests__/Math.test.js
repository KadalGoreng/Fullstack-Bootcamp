import { Add, Substract, Multiplication } from "../Math";

test("Return sum of two arguments", () => {
  // Arrange
  const a = 7;
  const b = 10;
  const expected = 17;
  // Act
  const result = Add(a, b);
  // Assert
  expect(result).toBe(expected);
});

test("Return substraction of a - b", () => {
  // Arrange
  const a = 7;
  const b = 10;
  const expected = -3;
  // Act
  const result = Substract(a, b);
  // Assert
  expect(result).toBe(expected);
});

test("Return multiplication of two arguments", () => {
  // Arrange
  const a = 7;
  const b = 10;
  const expected = 70;
  // Act
  const result = Multiplication(a, b);
  // Assert
  expect(result).toBe(expected);
});
