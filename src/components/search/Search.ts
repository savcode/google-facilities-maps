import PlaceResult = google.maps.places.PlaceResult;

import Map = google.maps.Map;
import Autocomplete = google.maps.places.Autocomplete;

export default class Search {
    private readonly elementId: string;
    private map: Map;
    private autocomplete: Autocomplete|null;

    constructor(map: Map, elementId: string) {
        this.elementId = elementId;
        this.map = map;
        this.autocomplete = null;
    }

    public init(): void {
        const input: Element|null = document.getElementById(this.elementId);
        if (input === null || !(input instanceof HTMLInputElement)) {
            return;
        }
        this.autocomplete = new google.maps.places.Autocomplete(input);

        if (this.autocomplete !== null) {
            this.autocomplete.addListener('place_changed', () => {
                if (this.autocomplete === null) return;
                const place: PlaceResult = this.autocomplete.getPlace();

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
}
