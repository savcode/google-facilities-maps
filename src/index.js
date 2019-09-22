// eslint-disable-next-line import/no-unresolved
import Config from 'config';
import FacilitiesList from './components/list/FacilitiesList';
import Map from './components/map/Map';
import Popup from './components/popup/Popup';
import DOMUtils from './utils/DOMUtils';
import FacilitiesApi from './api/Facilities';
import Search from './components/search/Search';

const App = () => {
    /**
     * Init
     */
    const facilitiesApi = FacilitiesApi.getFacilities();
    facilitiesApi.then((facilities) => {
        const popup = new Popup();
        popup.init();

        const map = new Map(Config.initOptions, facilities, popup.infoWindow, 'facilities-map');
        map.init();

        const facilitiesList = new FacilitiesList(facilities, map, 'facilities-list');
        facilitiesList.init();

        const search = new Search(map.map, 'facilities-autocomplete');
        search.init();
    });
};

DOMUtils.loaded(App);
