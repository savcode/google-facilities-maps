// @flow
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
    static async getFacilities(): Promise<Array<any>> {
        const res = await fetch('/data/facilities.json');
        const facilities = await res.json();
        return facilities;
    }
}
