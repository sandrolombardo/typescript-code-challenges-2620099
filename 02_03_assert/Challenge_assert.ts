import { strict as assert } from "node:assert";
import { getValueFromServer } from "./util-getValueFromServer";

let myNumber = getValueFromServer();

// assert(typeof myNumber === "number", "error -> value is not a number");

function myAssert(value: any): asserts value is number {
  if (typeof value !== 'number') {
    throw Error('value is not a number');
  }
}

myAssert(myNumber);

type MyType = typeof myNumber;