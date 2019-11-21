import { Facility } from '../types/Facility';

export default class FacilitiesApi {
    /**
     * Get facilities
     * @async
     * @method
     * @returns {Promise} Promise with facilities list
     */
    public static async getFacilities(): Promise<Facility[]> {
        const res: Response = await fetch('/data/facilities.json');
        const facilities: Facility[] = await res.json();
        return facilities;
    }
}
