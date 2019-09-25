import DOMUtils from '../utils/DOMUtils';

test('include html elements', () => {
    document.body.innerHTML = '<div id="domutils-test-include">test</div>';
    const elements = `
        <div id="domutils-test-include-element">test</div>
    `;
    DOMUtils.includeHTML('domutils-test-include', elements);

    expect(document.getElementById('domutils-test-include-element').innerHTML).toEqual('test');
});
