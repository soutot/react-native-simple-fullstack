/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type Home_sessions$ref: FragmentReference;
export type Home_sessions = $ReadOnlyArray<{|
  +_id: string,
  +title: string,
  +$refType: Home_sessions$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Home_sessions",
  "type": "Session",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
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
};
(node/*: any*/).hash = '6002e8c0110985d656d48d59fdfa2466';
module.exports = node;
