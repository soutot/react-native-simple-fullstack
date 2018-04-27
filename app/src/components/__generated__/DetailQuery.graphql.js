/**
 * @flow
 * @relayHash 7862ef3023e6ef6ced49bfcbeef3d135
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Detail_session$ref = any;
export type DetailQueryVariables = {|
  id: string,
|};
export type DetailQueryResponse = {|
  +session: ?{|
    +$fragmentRefs: Detail_session$ref,
  |},
|};
*/


/*
query DetailQuery(
  $id: String!
) {
  session(_id: $id) {
    ...Detail_session
  }
}

fragment Detail_session on Session {
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
  "name": "DetailQuery",
  "id": null,
  "text": "query DetailQuery(\n  $id: String!\n) {\n  session(_id: $id) {\n    ...Detail_session\n  }\n}\n\nfragment Detail_session on Session {\n  _id\n  title\n  speakers\n  slot\n  day\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DetailQuery",
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
            "name": "Detail_session",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DetailQuery",
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
(node/*: any*/).hash = '580bd57639cf16f2af23c69659659c8e';
module.exports = node;
