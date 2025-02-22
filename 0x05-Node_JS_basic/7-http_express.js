import express from 'express';

const PORT = 1245;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello ALX!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
