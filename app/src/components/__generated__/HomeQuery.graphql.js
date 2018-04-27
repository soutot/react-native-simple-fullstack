/**
 * @flow
 * @relayHash db1b7106f1e4e1ccd8e41ffc4a55dd7c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Home_sessions$ref = any;
export type HomeQueryVariables = {| |};
export type HomeQueryResponse = {|
  +sessions: ?$ReadOnlyArray<?{|
    +$fragmentRefs: Home_sessions$ref,
  |}>,
|};
*/


/*
query HomeQuery {
  sessions {
    ...Home_sessions
  }
}

fragment Home_sessions on Session {
  _id
  title
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "HomeQuery",
  "id": null,
  "text": "query HomeQuery {\n  sessions {\n    ...Home_sessions\n  }\n}\n\nfragment Home_sessions on Session {\n  _id\n  title\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "HomeQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "sessions",
        "storageKey": null,
        "args": null,
        "concreteType": "Session",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Home_sessions",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HomeQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "sessions",
        "storageKey": null,
        "args": null,
        "concreteType": "Session",
        "plural": true,
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
};
(node/*: any*/).hash = '944996efdaf1469668e5043ef9473073';
module.exports = node;
