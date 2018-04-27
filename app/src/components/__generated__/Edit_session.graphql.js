/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type Edit_session$ref: FragmentReference;
export type Edit_session = {|
  +_id: string,
  +title: string,
  +speakers: ?$ReadOnlyArray<?string>,
  +slot: string,
  +day: number,
  +$refType: Edit_session$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Edit_session",
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
(node/*: any*/).hash = '9ed2c0e6defd1a64893f3fade3000f00';
module.exports = node;
