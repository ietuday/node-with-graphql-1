import express  from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    console.log("Home");
    return res.json({
        msg : "Welcome to Graphql"
    });
});

app.use('/graphql',graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(3000, () => {
    console.log("App is running on PORT 3000");
});