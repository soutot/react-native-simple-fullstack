import { GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLList, GraphQLID } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';

import SessionType from '../types/SessionType';
import SessionModel from '../models/session';

export default mutationWithClientMutationId({
  name: 'SessionEdit',
  inputFields: {
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    day: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    title: {
      type: new GraphQLNonNull(GraphQLString)
    },
    slot: {
      type: new GraphQLNonNull(GraphQLString)
    },
    speakers: {
      type: new GraphQLNonNull(new GraphQLList(GraphQLString))
    },
  },
  mutateAndGetPayload: async (args) => {
    const { _id, speakers, title, day, slot } = args;
    const session = await SessionModel.find({ _id });
    
    SessionModel.update(
      { _id },
      { speakers, title, day, slot },
      { upsert: true, new: true },
      (error, obj) => {
      if (error) {
        console.error( JSON.stringify( error ) );
        return reject( error );
      }
    });

    return {
      ...session
    }
  },
  outputFields: {
    session: {
      type: SessionType,
      resolve: async (obj, args) => obj,
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error,
    },
  },
})
