import DOMUtils from '../../utils/DOMUtils';
import ObjectUtils from '../../utils/ObjectUtils';
import './FacilitiesList.scss';

export default class FacilitiesList {
    /**
     * FacilitiesList constructor
     * @constructor
     * @param {array} list
     * @param {object} mapComponent
     * @param {string} containerId
     */
    constructor(list, mapComponent, containerId) {
        this.containerId = containerId;
        this.mapComponent = mapComponent;
        this.list = list;
        this.filteredList = null;
        this.selectedFacility = null;
        this.previewMode = false;
    }

    init() {
        google.maps.event.addListener(this.mapComponent.map, 'bounds_changed', () => {
            if (this.previewMode) return;
            this.filterFacilities();
            this.updateList();
        });
    }

    filterFacilities = () => {
        const bounds = this.mapComponent.map.getBounds();
        this.filteredList = this.list.filter(
            (facility) => bounds.contains({ lat: facility.lat, lng: facility.lng }),
        );
    }

    updateList = () => {
        DOMUtils.includeHTML(this.containerId, this.renderElements());
        const facilitiesHtmlElements = document.querySelectorAll('.facility');
        DOMUtils.addEvent(facilitiesHtmlElements, 'click', this.previewFacility);
    }

    previewFacility = (e) => {
        const { target } = e;
        const { id } = target.dataset;
        const facility = ObjectUtils.findObjectByValue(this.list, 'id', parseInt(id, 10));
        this.selectedFacility = facility;
        this.previewMode = true;
        this.mapComponent.map.setCenter({
            lat: facility.lat,
            lng: facility.lng,
        });
        this.mapComponent.map.setZoom(17);
        DOMUtils.includeHTML(this.containerId, this.renderPreview());
        document.getElementById('back-from-preview').addEventListener('click', () => this.backToList());
    }

    backToList = () => {
        this.previewMode = false;
        this.filterFacilities();
        this.updateList();
    }

    renderElements() {
        return this.filteredList.map((element) => `
            <div class="facility" data-id="${element.id}">${element.name}</div>
        `);
    }

    renderPreview() {
        return `<div>
            <a href="javascript:void(0)" id="back-from-preview">go back</a>
            <h2>${this.selectedFacility.name}</h2>
            <p>${this.selectedFacility.address}</p>
        </div>`;
    }
}
