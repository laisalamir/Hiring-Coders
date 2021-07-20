import express from 'express';

import {ApolloServer, gql} from 'apollo-server-express';
import typeDefs from './graphql/typeDefs';

const app = express();

const server = new ApolloServer({
   typeDefs,
   resolvers: {
      Query:{
          demands: () => [],
      },
   },
});

server.applyMiddleware({
    app,
    cors: {
        origin: 'http://localhost:3000',
    },
})


/*
server.use(cors());

server.get('/status', (_, response)=>{
    response.send({
        status:'Okay',
    });
});

const enableCors = cors({
    origin: 'http://localhost:3000'
});

server
    .options('/authenticate', enableCors)
    .post('/authenticate', enableCors , express.json(), (request, response) =>{
        console.log(
            'Email', request.body.email,'Senha', request.body.password);
        response.send({
            Okay: true,
        });
});
*/
const PORT = process.env.PORT? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';

app.listen(8000, HOSTNAME, () => {
    console.log(`Server is listening at http://${HOSTNAME}:${PORT}`);
});