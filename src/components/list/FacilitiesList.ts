import DOMUtils from '../../utils/DOMUtils';
import ObjectUtils from '../../utils/ObjectUtils';
import './FacilitiesList.scss';

import { Facility } from '../../types/Facility';
import LatLngBounds = google.maps.LatLngBounds;
import Map = google.maps.Map;

class FacilitiesList {
    containerId: string;
    map: Map;
    list: Facility[];
    filteredList: Facility[];
    selectedFacility: Facility|null;
    previewMode: boolean;

    constructor(list: Facility[], map: Map, containerId: string) {
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

    private filterFacilities = (): void => {
        const bounds: LatLngBounds|null = this.map.getBounds() || null;
        if (bounds !== null) {
            this.filteredList = this.list.filter(
                (facility) => bounds.contains({ lat: facility.lat, lng: facility.lng }),
            );
        }
    }

    private updateList = (): void => {
        DOMUtils.includeHTML(this.containerId, this.renderElements());
        const facilitiesHtmlElements: NodeListOf<Element> = document.querySelectorAll('.facility');
        DOMUtils.addEvent(facilitiesHtmlElements, 'click', this.previewFacility);
    }

    private previewFacility = (e: Event ): void => {
        if (!(e.target instanceof HTMLElement)) {
            return;
        }

        const id: string = e.target.dataset.id || '';
        const facility: Facility|undefined = ObjectUtils.findFacilityByValue(this.list, 'id', parseInt(id, 10));

        if (typeof facility !== 'undefined') {
            this.selectedFacility = facility;
            this.previewMode = true;

            this.map.setCenter({
                lat: facility.lat,
                lng: facility.lng,
            });
            this.map.setZoom(17);
            DOMUtils.includeHTML(this.containerId, this.renderPreview());

            const backElement: Element|null = document.getElementById('back-from-preview');
            if (typeof backElement !== 'undefined' && backElement !== null) {
                backElement.addEventListener('click', () => this.backToList());
            }
        }
    }

    private backToList = (): void => {
        this.previewMode = false;
        this.filterFacilities();
        this.updateList();
    }

    private renderElements(): Array<string> {
        return this.filteredList.map((element) => `
            <div class="facility" data-id="${element.id}">${element.name}</div>
        `);
    }

    private renderPreview(): string {
        return `<div>
            <a href="javascript:void(0)" id="back-from-preview">go back</a>
            <h2>${this.selectedFacility ? this.selectedFacility.name : ''}</h2>
            <p>${this.selectedFacility ? this.selectedFacility.address : ''}</p>
        </div>`;
    }
}

export default FacilitiesList;
