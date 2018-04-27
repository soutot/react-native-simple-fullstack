import {
  GraphqlSchema,
  GraphQLNonNull,
	GraphQLList,
	GraphQLString,
	GraphQLInt,
  GraphQLObjectType,
  GraphQLID
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Session',
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLID) },
    day: { type: new GraphQLNonNull(GraphQLInt) },
		title: { type: new GraphQLNonNull(GraphQLString) },
		slot: { type: new GraphQLNonNull(GraphQLString) },
		speakers: { type: new GraphQLList(GraphQLString) }
  })
});
