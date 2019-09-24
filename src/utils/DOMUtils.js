export default class DOMUtils {
    /**
     *
     *
     * @param {string} containerId
     * @param {*} elements
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
     *
     *
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
     *
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
