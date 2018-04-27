import { GraphQLObjectType } from 'graphql';
import SessionType from './SessionType';

export default new GraphQLObjectType({
  name: 'Sessions',
  fields: () => ({
    session: { type: SessionType },
  }),
});
