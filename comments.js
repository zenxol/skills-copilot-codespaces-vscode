// Create web server
const express = require('express');
const app = express();
const port = 3000;
// Create a comments array
const comments = [
  { username: 'Alice', comment: 'I love apples' },
  { username: 'Bob', comment: 'Where is the apple tree?' },
  { username: 'Charlie', comment: 'I have no idea' },
];
// Create a route for getting comments
app.get('/comments', (req, res) => {
  res.json(comments);
});
// Create a route for posting comments
app.post('/comments', (req, res) => {
  const newComment = { username: req.body.username, comment: req.body.comment };
  comments.push(newComment);
  res.json(newComment);
});
// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
}); 