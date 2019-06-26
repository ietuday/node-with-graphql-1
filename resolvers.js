let users = [];
let user = {};

/**
 * Resolver for graphql
 */


export const resolvers = {
    Query: {
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
      getUser: ({id}) => {
          return users.find(user => user.id === id);
      },
      user: () => {
        return users;
      },
    },
    Mutation: {
      createUser: ({input}) => {
        user = input;
        users.push(user);
        return user;
      }   
    }
};