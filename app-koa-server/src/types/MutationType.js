import { GraphQLObjectType } from 'graphql';

import SessionAdd from '../mutations/SessionAddMutation';
import SessionEdit from '../mutations/SessionEditMutation';

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    SessionAdd,
    SessionEdit,
  }),
});
