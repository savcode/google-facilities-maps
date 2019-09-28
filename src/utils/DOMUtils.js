// @flow

export default class DOMUtils {
    /**
     * Add html elements
     * @param {string} containerId
     * @param {string | string[]} elements
     */
    static includeHTML(containerId: string, elements: string | string[]): void {
        const containerElement = document.getElementById(containerId);
        const html = elements instanceof Array ? elements.join('') : elements;

        if (containerElement !== null) {
            containerElement.innerHTML = '';
            containerElement.insertAdjacentHTML('beforeend', html);
        }
    }

    /**
     * Call method after page is loaded
     * @param {function} callback
     */
    static loaded(callback: any) {
        document.addEventListener('DOMContentLoaded', callback);
    }

    /**
     * Add event to elements array
     * @param {Object[]} elementsArray
     * @param {string} event
     * @param {function} callback
     */
    static addEvent(elementsArray: any, event: string, callback: (e: (Event)) => void): void {
        elementsArray.forEach((element) => {
            element.addEventListener(event, callback);
        });
    }
}
