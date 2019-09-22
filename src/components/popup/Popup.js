import './Popup.scss';

export default class Popup {
    constructor() {
        this.infoWindow = null;
    }

    init() {
        this.infoWindow = new google.maps.InfoWindow();
    }
}
