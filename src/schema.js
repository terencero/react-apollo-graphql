const { gql } = require('apollo-server');

module.exports.typeDefs = gql`
  type Query {
    users: [User]
  }

  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post]
    profile: Profile
  }

  type Post {
    id: ID!
    title: String
    content: String
    published: Boolean
    authorId: Int
    user: User
  }

  type Profile {
    id: ID!
    bio: String
  }
`;
