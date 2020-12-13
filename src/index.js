// let's go!
const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema');
const { createStore } = require('./utils');
const UserApi = require('./datasources/user');
const Query = require('./resolvers/Query');

const store = createStore();
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
  },
  dataSources: () => ({
    userApi: new UserApi({ store }),
  }),
})

server.listen().then(() => {
  console.log('Listening on port 4000');
  // console.log('test', server.config.dataSources().userApi.findAllUsers().then(console.log))
})


// main()
//   .catch(e => {
//     throw e
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })