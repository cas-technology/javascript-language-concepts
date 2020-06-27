const cssPositioning = () => {
    let elements = '<div>\n' +
        '    <div>\n' +
        '        <p id="none">This P element has no special positioning +100px left</p>\n' +
        '    </div>\n' +
        '    <div>\n' +
        '        <p id="relative">This P element has a relative position with +100px left</p>\n' +
        '    </div>\n' +
        '    <div>\n' +
        '        <p id="absolute">This P element has an absolute position with +100px left</p>\n' +
        '    </div>\n' +
        '    <br />\n' + // slight 'workaround' to have some space in the #app element
        '    <br />\n' + // without these, the bottom P element would overlap OUTSIDE the #app element
        '    <br />\n' +
        '</div>\n';
    document.getElementById('app').insertAdjacentHTML('beforeend', elements);
};
const cssDisplay = () => {
    let elements = '<div class="css-display-props">\n' +
        '    <h5>Flex</h5>\n' +
        '    <div id="flex">\n' +
        '        <div class="example-square"></div>\n' +
        '        <div class="example-square"></div>\n' +
        '        <div class="example-square"></div>\n' +
        '    </div>\n' +
        '    <h5>Inline</h5>\n' +
        '    <div id="inline">\n' +
        '        <div class="example-square"></div>\n' +
        '        <div class="example-square"></div>\n' +
        '        <div class="example-square"></div>\n' +
        '    </div>\n' +
        '    <h5>Inline-block</h5>\n' +
        '    <div id="inline-block">\n' +
        '        <div class="example-square"></div>\n' +
        '        <div class="example-square"></div>\n' +
        '        <div class="example-square"></div>\n' +
        '    </div>\n' +
        '    <h5>Block</h5>\n' +
        '    <div id="block">\n' +
        '        <div class="example-square"></div>\n' +
        '        <div class="example-square"></div>\n' +
        '        <div class="example-square"></div>\n' +
        '    </div>\n' +
        '</div>\n';
    document.getElementById('app').insertAdjacentHTML('beforeend', elements);
};
