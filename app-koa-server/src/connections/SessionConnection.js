import { connectionDefinitions } from 'graphql-relay';
import SessionType from '../types/SessionType';

export default connectionDefinitions({
  name: 'Sessions',
  nodeType: SessionType,
})
