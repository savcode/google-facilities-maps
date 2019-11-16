import { Facility } from '../types/Facility';

/**
 * @class FacilitiesApi
 */
export default class FacilitiesApi {
    /**
     * Get facilities
     * @async
     * @method
     * @returns {Promise} Promise with facilities list
     */
    static async getFacilities(): Promise<Facility[]> {
        const res: Response = await fetch('/data/facilities.json');
        const facilities: Facility[] = await res.json();
        return facilities;
    }
}
