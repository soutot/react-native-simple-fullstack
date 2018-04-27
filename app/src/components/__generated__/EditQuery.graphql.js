/**
 * @flow
 * @relayHash a9f9b7962f0a1bf5e53a12a76ca82e24
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Edit_session$ref = any;
export type EditQueryVariables = {|
  id: string,
|};
export type EditQueryResponse = {|
  +session: ?{|
    +$fragmentRefs: Edit_session$ref,
  |},
|};
*/


/*
query EditQuery(
  $id: String!
) {
  session(_id: $id) {
    ...Edit_session
  }
}

fragment Edit_session on Session {
  _id
  title
  speakers
  slot
  day
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "_id",
    "variableName": "id",
    "type": "String!"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "EditQuery",
  "id": null,
  "text": "query EditQuery(\n  $id: String!\n) {\n  session(_id: $id) {\n    ...Edit_session\n  }\n}\n\nfragment Edit_session on Session {\n  _id\n  title\n  speakers\n  slot\n  day\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "EditQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "session",
        "storageKey": null,
        "args": v1,
        "concreteType": "Session",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Edit_session",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "EditQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "session",
        "storageKey": null,
        "args": v1,
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
};
})();
(node/*: any*/).hash = 'bd55e080aae35b7f42f38e707d2c781f';
module.exports = node;
