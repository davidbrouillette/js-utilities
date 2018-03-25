/**
 * Returns a string representation of a symbol without 'Symbol(*)'
 * @export
 * @param {Symbol} str
 * @returns {string}
 * @namespace UtilityFunctions
 * @module getSymbolString
 */
export function getSymbolString(str) {
    return typeof str === "symbol"
        ? str
              .toString()
              .match(/\(.*?\)/)[0]
              .replace(/\(/, "")
              .replace(/\)/, "")
        : str;
}
