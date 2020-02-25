import express from 'express';
import path from 'path';

// initialize express
const app = express();
const port = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname)));

// define the endpoint for our main application
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () =>
  console.log(`Our application is running on port ${port}`)
);
