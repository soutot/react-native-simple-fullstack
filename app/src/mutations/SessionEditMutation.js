import { commitMutation, graphql } from 'react-relay';
import environment from '../../relay/environment';

const mutation = graphql`
  mutation SessionEditMutation($input: SessionEditInput!) {
    SessionEdit(input: $input) {
      session {
        _id
        title
        speakers
        slot
        day
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
