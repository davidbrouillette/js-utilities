/**
 * Joins the contents of obj1 and obj2 based on the single provided
 * value. The contents of obj1 overrides anything from obj2
 * if values are the same.
 * Any values in obj2 that aren't a subset of obj1 are discarded.
 *
 * @export
 * @param {array<objects>} obj1
 * @param {array<objects>} obj2
 * @param {string} key
 * @returns {array<objects>}
 * @module leftJoinOn
 */
export function leftJoinOn(obj1, obj2, key) {
    return obj1.map((elm, index, arr) => {
        let matches = obj2.reduce((facc, felm, findex, farr) => {
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
