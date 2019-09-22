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
    }

    init() {
        google.maps.event.addListener(this.map.map, 'bounds_changed', () => {
            const bounds = this.map.map.getBounds();
            this.filteredList = this.list.filter(
                (facility) => bounds.contains({ lat: facility.lat, lng: facility.lng }),
            );
            DOMUtils.includeHTML(this.containerId, this.renderElements());

            const facilitiesHtmlElements = document.querySelectorAll('.facility');
            DOMUtils.addEvent(facilitiesHtmlElements, 'click', this.previewFacility);
        });
    }

    // eslint-disable-next-line class-methods-use-this
    previewFacility = (e) => {
        const { target } = e;
        const { id } = target.dataset;
        const facility = ObjectUtils.findObjectByValue(this.list, parseInt(id, 10));
        console.log(facility);
    }

    renderElements() {
        return this.filteredList.map((element) => `
            <div class="facility" data-id="${element.id}">${element.name}</div>
        `).join('');
    }
}
