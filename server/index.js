const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Fake DB
let todos = [];

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.get("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((todo) => todo.id === id);

  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});

app.post("/todos", (req, res) => {
  const newTodo = req.body;
  newTodo.persisted = true;
  todos.push(newTodo);

  console.log("Added New Todo ", newTodo);

  res.status(201).json(newTodo);
});

app.put("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedTodo = req.body;
  updatedTodo.persisted = true;
  const index = todos.findIndex((todo) => todo.id === id);

  if (index !== -1) {
    todos[index] = { ...todos[index], ...updatedTodo };
    res.json(todos[index]);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});

app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((todo) => todo.id === id);
  todo.deleted = true;
  res.json({ message: "Todo deleted successfully" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
