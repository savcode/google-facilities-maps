export default class Search {
    /**
     * Search constructor
     * @constructor
     * @param {string} elementId
     */
    constructor(map, elementId) {
        this.elementId = elementId;
        this.map = map;
        this.autocomplete = null;
    }

    init() {
        const input = document.getElementById(this.elementId);
        this.autocomplete = new google.maps.places.Autocomplete(input);

        this.autocomplete.addListener('place_changed', () => {
            const place = this.autocomplete.getPlace();

            if (!place.geometry) {
                return;
            }

            if (place.geometry.viewport) {
                this.map.fitBounds(place.geometry.viewport);
            } else {
                this.map.setCenter(place.geometry.location);
                this.map.setZoom(17);
            }
        });
    }
}
