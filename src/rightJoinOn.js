/**
 * Joins the contents of obj1 and obj2 based on the single provided
 * value. The contents of obj2 overrides anything from obj1
 * if values are the same.
 * Any values in obj1 that aren't a subset of obj1 are discarded.
 *
 * @export
 * @param {array<objects>} obj1
 * @param {array<objects>} obj2
 * @param {string} key
 * @returns {array<objects>}
 * @module rightJoinOn
 */
export function rightJoinOn(obj1, obj2, key) {
    return obj2.map((elm, index, arr) => {
        let matches = obj1.reduce((facc, felm, findex, farr) => {
            if (felm[key] === elm[key]) {
                return { ...facc, ...felm };
            }

            return facc;
        }, {});

        return {
            ...matches,
            ...elm
        };
    });
}
