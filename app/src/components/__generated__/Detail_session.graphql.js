/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type Detail_session$ref: FragmentReference;
export type Detail_session = {|
  +_id: string,
  +title: string,
  +speakers: ?$ReadOnlyArray<?string>,
  +slot: string,
  +day: number,
  +$refType: Detail_session$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Detail_session",
  "type": "Session",
  "metadata": null,
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
};
(node/*: any*/).hash = 'd9ed044ecf1dba4cb751a7148222615f';
module.exports = node;
