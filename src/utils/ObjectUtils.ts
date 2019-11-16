import {Facility} from '../types/Facility';

export default class ObjectUtils {
    /**
     * Find object in array by value
     * @param {Object[]} objArray
     * @param {string} key
     * @param {*} value
     * @returns {Object} finded object
     */
    static findFacilityByValue(objArray: Facility[], key: keyof Facility, value: number|string): Facility|undefined {
        return objArray.find((obj: Facility) => typeof obj[key] !== 'undefined' && obj[key] === value);
    }
}
