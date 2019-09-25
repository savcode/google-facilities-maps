export default class DOMUtils {
    /**
     * Add html elements
     * @param {string} containerId
     * @param {string | string[]} elements
     */
    static includeHTML(containerId, elements) {
        const containerElement = document.getElementById(containerId);
        const html = elements instanceof Array ? elements.join('') : elements;

        containerElement.innerHTML = '';
        if (containerElement !== null) {
            containerElement.insertAdjacentHTML('beforeend', html);
        }
    }

    /**
     * Call method after page is loaded
     * @param {function} callback
     */
    static loaded(callback) {
        if (
            document.readyState === 'complete'
            || (document.readyState !== 'loading' && !document.documentElement.doScroll)
        ) {
            callback();
        } else {
            document.addEventListener('DOMContentLoaded', callback);
        }
    }

    /**
     * Add event to elements array
     * @param {array} elementsArray
     * @param {string} event
     * @param {function} callback
     */
    static addEvent(elementsArray, event, callback) {
        elementsArray.forEach((element) => {
            element.addEventListener(event, callback);
        });
    }
}
