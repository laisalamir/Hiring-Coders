import { typeDefs as clientTypeDefs } from './Client/Client';
import { typeDefs as demandTypeDfs } from './Demand/Demand';

const typeDefs = gql `
type Query {
    _root: String
}


${clientTypeDefs}
${demandTypeDfs}
`;

export default typeDefs;
