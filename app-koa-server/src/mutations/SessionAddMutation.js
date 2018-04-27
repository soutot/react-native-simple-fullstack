import { GraphQLString, GraphQLInt, GraphQLNonNull } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';

import SessionType from '../types/SessionType';
import SessionModel from '../models/session';

export default mutationWithClientMutationId({
  name: 'SessionAdd',
  inputFields: {
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
      type: new GraphQLNonNull(GraphQLString)
    },
  },
  mutateAndGetPayload: async ({ day, title, slot, speakers}) => {
    const data = new SessionModel({
      day,
      title,
      speakers,
      slot,
    });

    const session = await data.save();

    return {
      _id: session._id,
      title: session.title,
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
