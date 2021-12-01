import { AddTodo } from "../components/helper";

test("Should add todo to the list", () => {
  // Arrange
  const defaultTodo = [
    {
      id: 1,
      name: "Learn JSX",
      isComplete: false,
    },
    {
      id: 2,
      name: "Build awasome react app",
      isComplete: false,
    },
    {
      id: 3,
      name: "Ship it",
      isComplete: false,
    },
  ];

  const addTodo = {
    id: 4,
    name: "Learn HTML",
    isComplete: false,
  };

  const expected = [addTodo, ...defaultTodo];
  // Act
  const result = AddTodo(defaultTodo, addTodo);
  // Assert
  expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
});

test("should not mutate the existing todo array", () => {
  // Arrange
  const defaultTodo = [
    {
      id: 1,
      name: "Learn JSX",
      isComplete: false,
    },
    {
      id: 2,
      name: "Build awasome react app",
      isComplete: false,
    },
    {
      id: 3,
      name: "Ship it",
      isComplete: false,
    },
  ];

  const addTodo = {
    id: 4,
    name: "Learn HTML",
    isComplete: false,
  };

  const notExpected = addTodo;
  // Act
  const result = AddTodo(defaultTodo, addTodo);
  // Assert
  expect(result).not.toBe(notExpected);
});
