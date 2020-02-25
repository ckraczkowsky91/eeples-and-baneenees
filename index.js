import express from 'express';

// initialize express
const app = express();
const PORT = 4000;

// define the endpoint for our main application
app.get('/', (req, res) => {
  res.send(`Our application is running on port ${PORT}`)
});

app.listen(PORT, () =>
  console.log(`Our application is running on port ${PORT}`)
);
