import test from "ava";
import sum from "../src/index.js"

test("sum function", t => {
    t.is(sum(1,2), 3);
});
