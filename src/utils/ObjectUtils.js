// @flow

export default class ObjectUtils {
    /**
     * Find object in array by value
     * @param {Object[]} objArray
     * @param {string} key
     * @param {*} value
     * @returns {Object} finded object
     */
    static findObjectByValue(objArray: Array<any>, key: string, value: any): any {
        return objArray.find((obj) => typeof obj[key] !== 'undefined' && obj[key] === value);
    }
}
