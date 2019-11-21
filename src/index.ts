// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import Config from 'config';
import FacilitiesList from './components/list/FacilitiesList';
import Map from './components/map/Map';
import Search from './components/search/Search';
import FacilitiesApi from './api/Facilities';
import InfoWindow = google.maps.InfoWindow;

const App = async (): Promise<void> => {
    const facilities = await FacilitiesApi.getFacilities();
    const popup: InfoWindow = new google.maps.InfoWindow();
    const mapComponent: Map = new Map(Config.initOptions, facilities, popup, Config.mapElement);
    mapComponent.init();

    const facilitiesList: FacilitiesList = new FacilitiesList(facilities, mapComponent.getMap(), Config.listElement);
    facilitiesList.init();
    mapComponent.setFacilitiesList(facilitiesList);

    const search: Search = new Search(mapComponent.getMap(), Config.searchElement);
    search.init();
};
document.addEventListener('DOMContentLoaded', App);
