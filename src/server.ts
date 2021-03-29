import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';

import typeDefs from './schema';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';
import { GraphQLSchema } from 'graphql';
import pubSub from './pubSubInMemory'



const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({
  // subscriptions: {
  //   path: '/subscriptions'
  // },
  schema,
  subscriptions: {
    // path: '/subscriptions',
    onConnect: (connectionParams, webSocket, context) => {
      console.log('Client connected');
    },
    onDisconnect: (webSocket, context) => {
      console.log('Client disconnected')
    },
  },
});

const app = express();
app.use('*', cors());
app.use(compression());
server.applyMiddleware({ app, path: '/graphql' });

app.post('/bigEvent', (req,res) => {

  console.log('bigevent!!!!!!!!!!!!');
  pubSub.publish('BIG_EVENT', {
    bigEvent: {
      id: '123123'
    }
  });

  res.send('Ok');
})

const httpServer = createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(
  { port: 3000 },
  (): void => {

    console.log(`\n🚀      GraphQL is now running on http://localhost:3000/graphql`);
    console.log(`🚀 Subscription endpoint ready at ws://localhost:3000${server.subscriptionsPath}`)
  }
);


