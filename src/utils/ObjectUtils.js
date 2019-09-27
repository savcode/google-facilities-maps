export default class ObjectUtils {
    /**
     * Find object in array by value
     * @param {array} objArray
     * @param {string} key
     * @param {*} value
     * @returns {Object} finded object
     */
    static findObjectByValue(objArray, key, value) {
        return objArray.find((obj) => typeof obj[key] !== 'undefined' && obj[key] === value);
    }
}
