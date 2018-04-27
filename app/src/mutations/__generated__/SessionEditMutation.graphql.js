/**
 * @flow
 * @relayHash 2fb53c5b28e4d4868a757506226afba2
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SessionEditMutationVariables = {|
  input: {
    day: number,
    title: string,
    slot: string,
    speakers: string,
    clientMutationId?: ?string,
  },
|};
export type SessionEditMutationResponse = {|
  +SessionEdit: ?{|
    +session: ?{|
      +_id: string,
      +title: string,
      +speakers: ?$ReadOnlyArray<?string>,
      +slot: string,
      +day: number,
    |},
  |},
|};
*/


/*
mutation SessionEditMutation(
  $input: SessionEditInput!
) {
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "SessionEditInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "SessionEdit",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "SessionEditInput!"
      }
    ],
    "concreteType": "SessionEditPayload",
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
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "speakers",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "slot",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "day",
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
  "name": "SessionEditMutation",
  "id": null,
  "text": "mutation SessionEditMutation(\n  $input: SessionEditInput!\n) {\n  SessionEdit(input: $input) {\n    session {\n      _id\n      title\n      speakers\n      slot\n      day\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SessionEditMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "SessionEditMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node/*: any*/).hash = '4173f9a465787aedda9f9f886dcf95dd';
module.exports = node;
