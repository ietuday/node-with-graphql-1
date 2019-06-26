# GraphQL.js

The JavaScript reference implementation for GraphQL, a query language for APIs created by Facebook.

[![npm version](https://badge.fury.io/js/graphql.svg)](https://badge.fury.io/js/graphql)
[![Build Status](https://travis-ci.org/graphql/graphql-js.svg?branch=master)](https://travis-ci.org/graphql/graphql-js?branch=master)
[![Coverage Status](https://codecov.io/gh/graphql/graphql-js/branch/master/graph/badge.svg)](https://codecov.io/gh/graphql/graphql-js)

See more complete documentation at https://graphql.org/ and
https://graphql.org/graphql-js/.

Looking for help? Find resources [from the community](https://graphql.org/community/).


## Getting Started

An overview of GraphQL in general is available in the
[README](https://github.com/graphql/graphql-spec/blob/master/README.md) for the
[Specification for GraphQL](https://github.com/graphql/graphql-spec). That overview
describes a simple set of GraphQL examples that exist as [tests](src/__tests__)
in this repository. A good way to get started with this repository is to walk
through that README and the corresponding tests in parallel.

### Using GraphQL.js

Install GraphQL.js from npm

With yarn:

```sh
yarn add graphql
```

or alternatively using npm:

```sh
npm install --save graphql
```

GraphQL.js provides two important capabilities: building a type schema, and
serving queries against that type schema.

First, build a GraphQL type schema which maps to your code base.

```js
import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world';
        }
      }
    }
  })
});
```

This defines a simple schema with one type and one field, that resolves
to a fixed value. The `resolve` function can return a value, a promise,
or an array of promises. A more complex example is included in the top
level [tests](src/__tests__) directory.

Then, serve the result of a query against that type schema.

```js
var query = '{ hello }';

graphql(schema, query).then(result => {

  // Prints
  // {
  //   data: { hello: "world" }
  // }
  console.log(result);

});
```

This runs a query fetching the one field defined. The `graphql` function will
first ensure the query is syntactically and semantically valid before executing
it, reporting errors otherwise.

```js
var query = '{ boyhowdy }';

graphql(schema, query).then(result => {

  // Prints
  // {
  //   errors: [
  //     { message: 'Cannot query field boyhowdy on RootQueryType',
  //       locations: [ { line: 1, column: 3 } ] }
  //   ]
  // }
  console.log(result);

});
```

### Want to ride the bleeding edge?

The `npm` branch in this repository is automatically maintained to be the last
commit to `master` to pass all tests, in the same form found on npm. It is
recommended to use builds deployed to npm for many reasons, but if you want to use
the latest not-yet-released version of graphql-js, you can do so by depending
directly on this branch:

```
npm install graphql@git://github.com/graphql/graphql-js.git#npm
```

### Using in a Browser

GraphQL.js is a general purpose library and can be used both in a Node server
and in the browser. As an example, the [GraphiQL](https://github.com/graphql/graphiql/)
tool is built with GraphQL.js!

Building a project using GraphQL.js with [webpack](https://webpack.js.org) or
[rollup](https://github.com/rollup/rollup) should just work and only include
the portions of the library you use. This works because GraphQL.js is distributed
with both CommonJS (`require()`) and ESModule (`import`) files. Ensure that any
custom build configurations look for `.mjs` files!

####GraphQL is a syntax that describes how to ask for data, and is generally used to load data from a server to a client. GraphQL has three main characteristics:

It lets the client specify exactly what data it needs.
It makes it easier to aggregate data from multiple sources.
It uses a type system to describe data.
With GraphQL, the user is able to make a single call to fetch the required information rather than to construct several REST requests to fetch the same.

## Screenshots

### What is GraphQl
![Alt text](./screenshots/graphql-1.png?raw=true "Optional Title")

### GRAPHQL EDITOR
![Alt text](./screenshots/graphql-editor.png?raw=true "Optional Title")

### GRAPHQL ADVANTAGE
![Alt text](./screenshots/graphql-2.png?raw=true "Optional Title")

### AVOID MULTIPLE CALLS
![Alt text](./screenshots/graphql-3.png?raw=true "Optional Title")

### GRAPHQL ADVANTAGE
![Alt text](./screenshots/graphql-4.png?raw=true "Optional Title")

### GRAPHQL VS REST
![Alt text](./screenshots/graphql-5.png?raw=true "Optional Title")

### GRAPHQL Test graphql
![Alt text](./screenshots/graphql-6.png?raw=true "Optional Title")

### GRAPHQL ALIASES
![Alt text](./screenshots/graphql-7.png?raw=true "Optional Title")

### GRAPHQL Fragments
![Alt text](./screenshots/graphql-fragments.png?raw=true "Optional Title")

### GRAPHQL Nested
![Alt text](./screenshots/graphql-nested.png?raw=true "Optional Title")

### GRAPHQL operations
![Alt text](./screenshots/graphql-operations.png?raw=true "Optional Title")

### GRAPHQL Variables
![Alt text](./screenshots/graphql-variable.png?raw=true "Optional Title")

### GRAPHQL Resolvers
![Alt text](./screenshots/resolvers.png?raw=true "Optional Title")


### Links

[Understanding GraphQL Queries, Mutations and Subscriptions](https://medium.com/fbdevclagos/understanding-graphql-queries-mutations-and-subscriptions-a80a8b5c877c)


[GraphQL and MongoDB — a quick example](https://medium.com/the-ideal-system/graphql-and-mongodb-a-quick-example-34643e637e49)


