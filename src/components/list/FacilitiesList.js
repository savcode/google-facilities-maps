// @flow

import DOMUtils from '../../utils/DOMUtils';
import ObjectUtils from '../../utils/ObjectUtils';
import './FacilitiesList.scss';

import type { Facility } from '../../types/Facility';

declare var google: any;

export default class FacilitiesList {
    containerId: string;
    map: any;
    list: Array<Facility>;
    filteredList: Array<any>;
    selectedFacility: any;
    previewMode: boolean;

    /**
     * FacilitiesList constructor
     * @constructor
     * @param {Object[]} list
     * @param {Object} map
     * @param {string} containerId
     */
    constructor(list: Array<Facility>, map: any, containerId: string): void {
        this.containerId = containerId;
        this.map = map;
        this.list = list;
        this.filteredList = [];
        this.selectedFacility = null;
        this.previewMode = false;
    }

    init(): void {
        google.maps.event.addListener(this.map, 'bounds_changed', () => {
            if (this.previewMode) return;
            this.filterFacilities();
            this.updateList();
        });
    }

    filterFacilities = (): void => {
        const bounds = this.map.getBounds();
        this.filteredList = this.list.filter(
            (facility) => bounds.contains({ lat: facility.lat, lng: facility.lng }),
        );
    }

    updateList = (): void => {
        DOMUtils.includeHTML(this.containerId, this.renderElements());
        const facilitiesHtmlElements = document.querySelectorAll('.facility');
        DOMUtils.addEvent(facilitiesHtmlElements, 'click', this.previewFacility);
    }

    previewFacility = ({ target }: { target: EventTarget }): void => {
        if (!(target instanceof HTMLElement)) {
            return;
        }
        const { id } = target.dataset;
        const facility = ObjectUtils.findObjectByValue(this.list, 'id', parseInt(id, 10));
        const backElement = document.getElementById('back-from-preview');

        this.selectedFacility = facility;
        this.previewMode = true;

        this.map.setCenter({
            lat: facility.lat,
            lng: facility.lng,
        });
        this.map.setZoom(17);
        DOMUtils.includeHTML(this.containerId, this.renderPreview());

        if (typeof backElement !== 'undefined' && backElement !== null) {
            backElement.addEventListener('click', () => this.backToList());
        }
    }

    backToList = (): void => {
        this.previewMode = false;
        this.filterFacilities();
        this.updateList();
    }

    renderElements(): Array<string> {
        return this.filteredList.map((element) => `
            <div class="facility" data-id="${element.id}">${element.name}</div>
        `);
    }

    renderPreview(): string {
        return `<div>
            <a href="javascript:void(0)" id="back-from-preview">go back</a>
            <h2>${this.selectedFacility.name}</h2>
            <p>${this.selectedFacility.address}</p>
        </div>`;
    }
}
