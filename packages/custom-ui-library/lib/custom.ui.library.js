import { init, classModule, propsModule, styleModule, eventListenersModule, h, } from '../../../node_modules/snabbdom/build/index';
const patch = init([
    classModule,
    propsModule,
    styleModule,
    eventListenersModule,
]);
const rootDocument = document && document.getElementById('root');
let currentDom = null;
function handleChildren(customElement) {
    return customElement.map((element) => {
        return h(element.elementType, Object.assign({}, element.props), element.state);
    });
}
export function initializeView(customElement) {
    const elementChildrenArray = handleChildren(customElement);
    const initialVDom = h('div#root', { style: { display: 'flex', alignItems: 'center', gap: '10px' },
        hook: {
            create: () => {
                console.log('Component Mounted');
            },
        }, }, elementChildrenArray);
    patch(rootDocument, initialVDom);
    currentDom = initialVDom;
    console.log('Component Mounted');
}
export function handleUpate(customElement) {
    const elementChildrenArray = handleChildren(customElement);
    const newVDom = h('div#root', {
        style: { display: 'flex', alignItems: 'center', gap: '10px' },
        hook: {
            update: () => {
                console.log('Component Update');
            },
        },
    }, elementChildrenArray);
    patch(currentDom, newVDom);
    currentDom = newVDom;
}
//# sourceMappingURL=custom.ui.library.js.map