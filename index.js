import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema2";
import mongoose from 'mongoose';

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ggraphql',  { useNewUrlParser: true })
        .then(() => {
            console.log("Succesfully Connected to MongoDb");
            
        })
        .catch((error) => {
            console.log("*************Error on Connecting to MongoDB*********");
            console.log(error);
        });
        
app.get("/", (req, res) => {
  return res.json({
    msg: "Welcome to GraphQL World!!"
  });
});
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.listen(3000, () => {
  console.log("App is running on PORT 3000");
});