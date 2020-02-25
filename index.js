import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import routes from './routes/itemsRoutes';

// initialize express
const app = express();
const port = process.env.PORT || 4000;

// tell Express where to find static content i.e. HTML files, stylesheets, and images
app.use(express.static(path.join(__dirname)));

// connect our Express application to the database using Mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://dbUser:dbUserPassword@cluster0-ermq3.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
  }, function (err, res) {
      if (err) {
      console.log (err);
      } else {
      console.log ('Succeeded connected to MongoDN');
      }
    }
  );

// use bodyparser so that our requests can be understood by MongoDB
// otherwise our request will error out
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

routes(app);

// define the endpoint for our main application
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/frontend/index.html'));
});

app.listen(port, () =>
  console.log(`Our application is running on port ${port}`)
);
