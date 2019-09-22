export default class ObjectUtils {
    /**
     *
     * @param {array} objArray
     * @param {*} value
     */
    static findObjectByValue(objArray, value) {
        return objArray.find((obj) => Object.keys(obj).some((key) => obj[key] === value));
    }
}
