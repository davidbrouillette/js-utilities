import { arrayToObject } from "./arrayToObject";
/**
 *  Joins the contents of obj1 and obj2 based on the two provided keys.
 *  obj1 is joined using key1.
 *  obj3 is joined using key2.
 *  The contents of obj1 overrides anything from obj2
 * if values are the same.
 * Any values in obj2 that aren't a subset of obj1 are discarded.
 *
 * @export
 * @param {array<objects>} obj1
 * @param {array<objects>} obj2
 * @param {string} key1
 * @param {string} key2
 * @returns {array<objects>}
 * @module leftJoin
 */
export function leftJoin(obj1, obj2, key1, key2) {
    let obj1Val = Array.isArray(obj1) ? arrayToObject(obj1, key1) : { ...obj1 };
    let obj2Val = Array.isArray(obj2) ? arrayToObject(obj2, key2) : { ...obj2 };

    for (let val in obj2Val) {
        if (obj1Val.hasOwnProperty(val)) {
            obj1Val[val] = { ...obj2Val[val], ...obj1Val[val] };
        } else {
            obj1Val[val] = { ...obj2Val[val] };
        }
    }

    return Object.values(obj1Val);
}
