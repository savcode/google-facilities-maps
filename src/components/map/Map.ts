import './Map.scss';

import { Facility } from '../../types/Facility';
import Marker = google.maps.Marker;
import FacilitiesList from '../list/FacilitiesList';
import InfoWindow = google.maps.InfoWindow;
import MapOptions = google.maps.MapOptions;

export default class Map {
    private readonly containerId: string;
    private readonly initMapOptions: MapOptions;
    private readonly facilities: Facility[];
    private readonly infoWindow: InfoWindow;
    private readonly map: google.maps.Map;
    private markers: Marker[]|null;
    private markerCluster: MarkerClusterer|null;
    private facilitiesList: FacilitiesList|null;

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

    public init(): void {
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

    public setFacilitiesList(facilitiesList: FacilitiesList): void {
        this.facilitiesList = facilitiesList;
    }

    public getMap() {
        return this.map;
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
