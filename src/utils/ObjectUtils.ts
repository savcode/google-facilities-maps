import {Facility} from '../types/Facility';

export default class ObjectUtils {
    /**
     * Find object in array by value
     */
    public static findFacilityByValue(objArray: Facility[], key: keyof Facility, value: number|string): Facility|undefined {
        return objArray.find((obj: Facility) => typeof obj[key] !== 'undefined' && obj[key] === value);
    }
}
