const { makeExecutableSchema } = require('graphql-tools');
import resolvers from './resolvers';

const typeDefs = `
type HackerNewsItem{
    id: String
    text: String
    timeISO: String
    time: Int
    title: String
    deleted: Boolean
}

input HackerNewsItemInput{
    id: String
    text: String
    timeISO: String
    time: Int
    title: String
    deleted: Boolean
}

type Email{
    email: String!
}

type User{
    id: ID
    firstName: String!
    lastName: String!
    email: String 
    age: Int!
    gender: Gender
    items: [HackerNewsItem]
}

enum Gender{
    MALE
    FEMALE
    OTHER
}
type Query {
    item: HackerNewsItem
    getUser(id: ID): User
    users: [User]
}

input UserInput{
    id: ID,
    firstName: String!,
    lastName: String!,
    email: String
    age: Int!
    gender: Gender
    items: [HackerNewsItemInput]
}

type Mutation{
    createUser(input: UserInput): User
}`;

var schema = makeExecutableSchema({typeDefs, resolvers});


export default {schema};