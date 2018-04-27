/**
 * @flow
 * @relayHash 0cc1716b1dff2eb843f1576c9fb5c59a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SessionAddMutationVariables = {|
  input: {
    day: number,
    title: string,
    slot: string,
    speakers: string,
    clientMutationId?: ?string,
  },
|};
export type SessionAddMutationResponse = {|
  +SessionAdd: ?{|
    +session: ?{|
      +_id: string,
      +title: string,
    |},
  |},
|};
*/


/*
mutation SessionAddMutation(
  $input: SessionAddInput!
) {
  SessionAdd(input: $input) {
    session {
      _id
      title
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "SessionAddInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "SessionAdd",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "SessionAddInput!"
      }
    ],
    "concreteType": "SessionAddPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "session",
        "storageKey": null,
        "args": null,
        "concreteType": "Session",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "_id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "SessionAddMutation",
  "id": null,
  "text": "mutation SessionAddMutation(\n  $input: SessionAddInput!\n) {\n  SessionAdd(input: $input) {\n    session {\n      _id\n      title\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SessionAddMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "SessionAddMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node/*: any*/).hash = 'da11bd79527e31dbe25e94b98d4b9e0d';
module.exports = node;
