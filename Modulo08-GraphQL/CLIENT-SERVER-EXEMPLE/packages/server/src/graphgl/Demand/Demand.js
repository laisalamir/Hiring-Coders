import { sql } from 'apollo-server-express';

export const typeDefs = gqp `
    type Demand {
        id: ID!
        name: String!
        client: Client"
        deadLine: String
    }

extends type Query {
    demands: [Demand]!
    }
`;

export const resolvers = {
    Query: {
        demands: () => [],
    },
};