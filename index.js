import express from 'express';

// initialize express
const app = express();
const port = process.env.PORT || 4000;

// define the endpoint for our main application
app.get('/', (req, res) => {
  res.send(`Our application is running on port ${PORT}`)
});

app.listen(port, () =>
  console.log(`Our application is running on port ${port}`)
);
