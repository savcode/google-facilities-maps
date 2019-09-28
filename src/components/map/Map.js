// @flow

import './Map.scss';

declare var google: any;
declare var MarkerClusterer: any;

export default class Map {
    containerId: string;
    initMapOptions: any;
    facilities: Array<any>;
    infoWindow: any;
    map: any;
    markers: any;
    markerCluster: any;

    /**
     * Map constructor
     * @constructor
     * @param {Object} initMapOptions
     * @param {Object[]} facilities
     * @param {Object} infoWindow
     * @param {string} containerId
     */
    constructor(
        initMapOptions: any,
        facilities: Array<any>,
        infoWindow: any,
        containerId: string,
    ): void {
        this.containerId = containerId;
        this.initMapOptions = initMapOptions;
        this.facilities = facilities;
        this.infoWindow = infoWindow;
        this.map = null;
        this.markers = null;
        this.markerCluster = null;
    }

    init():void {
        this.map = new google.maps.Map(
            document.getElementById(this.containerId), this.initMapOptions,
        );
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

    initMarkers(): void {
        this.markers = this.facilities.map((facility) => {
            const marker = new google.maps.Marker({
                position: { lat: facility.lat, lng: facility.lng },
            });

            marker.addListener('click', () => {
                this.infoWindow.setContent(facility.name);
                this.infoWindow.open(this.map, marker);
            });
            return marker;
        });

        this.markerCluster = new MarkerClusterer(this.map, this.markers,
            { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
    }
}
