/**
 * Converts an array to an object with the
 * given value as object key.
 *
 * @export
 * @param {array<object>} data
 * @param {string} key
 * @returns  {object}
 * @module arrayToObject
 */
export function arrayToObject(data, key) {
    return data.reduce((acc, elm, index, arr) => {
        return { ...acc, [elm[key]]: elm };
    }, {});
}
