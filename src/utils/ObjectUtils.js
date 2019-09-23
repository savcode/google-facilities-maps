export default class ObjectUtils {
    /**
     *
     * @param {array} objArray
     * @param {string} key
     * @param {*} value
     */
    static findObjectByValue(objArray, key, value) {
        return objArray.find((obj) => typeof obj[key] !== 'undefined' && obj[key] === value);
    }
}
