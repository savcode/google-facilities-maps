// @flow

// $flow--config-file
import Config from 'config'; // eslint-disable-line import/no-unresolved
import FacilitiesList from './components/list/FacilitiesList';
import Map from './components/map/Map';
import Popup from './components/popup/Popup';
import DOMUtils from './utils/DOMUtils';
import FacilitiesApi from './api/Facilities';
import Search from './components/search/Search';

const App = (): void => {
    /**
     * Init
     */
    const facilitiesApi = FacilitiesApi.getFacilities();
    facilitiesApi.then((facilities) => {
        const popup = new Popup();
        const mapComponent = new Map(Config.initOptions, facilities, popup, Config.mapElement);
        mapComponent.init();

        const facilitiesList = new FacilitiesList(facilities, mapComponent.map, Config.listElement);
        facilitiesList.init();

        const search = new Search(mapComponent.map, Config.searchElement);
        search.init();
    });
};

DOMUtils.loaded(App);
