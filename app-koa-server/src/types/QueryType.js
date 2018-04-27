import {
  GraphqlSchema,
  GraphQLNonNull,
	GraphQLList,
	GraphQLString,
	GraphQLInt,
	GraphQLObjectType,
} from 'graphql';
import SessionType from './SessionType';
import SessionsType from './SessionsType';
import * as SessionLoader from '../loaders/SessionLoader';
import SessionConnection from '../connections/SessionConnection';

export default new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    session: {
      type: SessionType,
      args: {
        _id: {
          type: new GraphQLNonNull(GraphQLString),
        }
      },
      resolve: (obj, args) => SessionLoader.load(args),
    },
    sessions: {
      type: new GraphQLList(SessionType),
      resolve: () => SessionLoader.loadAll(),
    },
    // sessions: {
    //   type: SessionConnection.connectionType,
    //   args: {
    //     ...connectionArgs
    //   },
    //   resolve: () => SessionLoader.loadAll(),
    // },
  }),
});
