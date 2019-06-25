let users = [];
let user = {};

/**
 * Resolver for graphql
 */
const resolvers = {
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
  createUser: ({input}) => {
    user = input;
    users.push(user);
    return user;
  }   
};

export default resolvers;