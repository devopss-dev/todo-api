const express = require('express');
const app = express();
const port = 8081;

let todos = [
  { id: 1, task: "Learn Jenkins" },
  { id: 2, task: "Deploy with Docker Swarm" }
];

app.use(express.json());

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.listen(port, () => {
  console.log(`To-Do API running at http://localhost:${port}`);
});

