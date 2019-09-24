export default class FacilitiesApi {
    static async getFacilities() {
        const res = await fetch('/data/facilities.json');
        const facilities = await res.json();
        return facilities;
    }
}
