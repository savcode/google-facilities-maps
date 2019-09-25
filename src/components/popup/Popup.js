import './Popup.scss';

export default class Popup {
    infoWindow = null

    init() {
        this.infoWindow = new google.maps.InfoWindow();
    }
}
