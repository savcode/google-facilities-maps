import DOMUtils from '../../utils/DOMUtils';
import ObjectUtils from '../../utils/ObjectUtils';
import './FacilitiesList.scss';

export default class FacilitiesList {
    /**
     * FacilitiesList constructor
     * @constructor
     * @param {array} list
     * @param {object} map
     * @param {string} containerId
     */
    constructor(list, map, containerId) {
        this.containerId = containerId;
        this.map = map;
        this.list = list;
        this.filteredList = null;
        this.selectedFacility = null;
    }

    init() {
        google.maps.event.addListener(this.map.map, 'bounds_changed', () => {
            const bounds = this.map.map.getBounds();
            this.filteredList = this.list.filter(
                (facility) => bounds.contains({ lat: facility.lat, lng: facility.lng }),
            );
            this.updateList();
        });
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
        DOMUtils.includeHTML(this.containerId, this.renderPreview());
        document.getElementById('back-from-preview').addEventListener('click', () => this.updateList());
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
