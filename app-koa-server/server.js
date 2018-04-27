import Koa from 'koa';
import Router from 'koa-router';
import graphqlHttp from 'koa-graphql';
import convert from 'koa-convert';
import { koaPlayground } from 'graphql-playground-middleware';

import mongoose from 'mongoose';
import { graphql } from 'graphql';
import graphqlSchema from './src/data/schema';

mongoose.connect('');  // Your database endpoint goes here. Example: mongodb://user:password@ds999999.mlab.com:99999/myApp
const PORT = process.env.PORT || 5000;
const schema = graphqlSchema();

const app = new Koa();
const router = new Router();

router.all(
  '/playground',
  koaPlayground({
    endpoint: '/graphql',
  }),
);

router.all(
  '/graphql',
  convert(
    graphqlHttp(async (req, ctx) => {
      return {
        graphiql: true,
        schema,
        rootValue: {
          request: ctx.req,
        },
        context: {},
      };
    }),
  ),
);

// app.use(router.routes()).use(router.allowedMethods());
app.use(router.routes());

app.listen(PORT, () => {
  console.info('Server running on port %s', PORT);
});
