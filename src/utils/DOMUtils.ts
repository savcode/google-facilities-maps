export default class DOMUtils {
    /**
     * Add html elements
     */
    public static includeHTML(containerId: string, elements: string | string[]): void {
        const containerElement: Element|null = document.getElementById(containerId);
        const html: string = Array.isArray(elements) ? elements.join('') : elements;

        if (containerElement !== null) {
            containerElement.innerHTML = '';
            containerElement.insertAdjacentHTML('beforeend', html);
        }
    }

    /**
     * Add event to elements array
     * @param {Object[]} elementsArray
     * @param {string} event
     * @param {function} callback
     */
    public static addEvent(elementsArray: NodeListOf<Element>, event: string, callback: (e: Event) => void): void {
        [].forEach.call(elementsArray, (element: Element) => {
            element.addEventListener(event, callback);
        });
    }
}
