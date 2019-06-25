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

let users = [];
let user = {};

/**
 * Resolver for graphql
 */
const root = {
    item: () => {
    return {
        id: '123123',
        text: 'This is hacker new text',
        timeISO: '2pm Tuseday',
        time: 12345678,
        title: 'Graph First App',
        deleted: false
    };
  },
  user: () => {
      return {
          firstName: 'Jane',
          lastName: 'Doe',
          emails: [
              {
                  email: 'test@gmail.com'
              },
              {
                email: 'test1@gmail.com'
              },
              {
                email: 'test2@gmail.com'
              }
          ]
      };
  },
  createUser: ({input}) => {
    user = input;
    users.push(user);
    return user;
  }   
};

app.use('/graphql',graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(3000, () => {
    console.log("App is running on PORT 3000");
});