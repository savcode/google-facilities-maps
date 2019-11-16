import './Map.scss';

import { Facility } from '../../types/Facility';
import Marker = google.maps.Marker;
import FacilitiesList from '../list/FacilitiesList';
import InfoWindow = google.maps.InfoWindow;
import MapOptions = google.maps.MapOptions;

export default class Map {
    containerId: string;
    initMapOptions: MapOptions;
    facilities: Facility[];
    infoWindow: InfoWindow;
    map: google.maps.Map;
    markers: Marker[]|null;
    markerCluster: MarkerClusterer|null;
    facilitiesList: FacilitiesList|null;

    constructor(initMapOptions: MapOptions, facilities: Facility[], infoWindow: InfoWindow, containerId: string) {
        this.containerId = containerId;
        this.initMapOptions = initMapOptions;
        this.facilities = facilities;
        this.infoWindow = infoWindow;
        this.map = new google.maps.Map(
            document.getElementById(this.containerId), this.initMapOptions,
        );
        this.markers = null;
        this.markerCluster = null;
        this.facilitiesList = null;
    }

    init(): void {
        this.initMarkers();

        if (navigator.geolocation && navigator.geolocation.getCurrentPosition) {
            navigator.geolocation.getCurrentPosition((position) => {
                const newCenter = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                this.map.setCenter(newCenter);
                this.map.setZoom(8);
            }, () => {
                // TODO: error handler
            });
        }
    }

    setFacilitiesList(facilitiesList: FacilitiesList): void {
        this.facilitiesList = facilitiesList;
    }

    private initMarkers(): void {
        this.markers = this.facilities.map((facility: Facility) => {
            const marker: Marker = new google.maps.Marker({
                position: { lat: facility.lat, lng: facility.lng },
            });

            marker.addListener('click', () => {
                this.infoWindow.setContent(facility.name);
                this.infoWindow.open(this.map, marker);

                // TODO: open facility preview
            });
            return marker;
        });

        this.markerCluster = new MarkerClusterer(this.map, this.markers,
            { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
    }
}
