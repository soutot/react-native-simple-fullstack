import { commitMutation, graphql } from 'react-relay';
import environment from '../../relay/environment';

const mutation = graphql`
  mutation SessionAddMutation ($input: SessionAddInput!) {
    SessionAdd(input: $input) {
      session {
        _id
        title
      }
    }
  }
`;

function commit(input, onCompleted, onError) {

  const variables = {
    input,
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted,
    onError,
  });
}

export default { commit };
