import { initializeView, handleUpate } from '../../custom-ui-library/src/custom.ui.library.js';
let initalValue = {
    state: 0
};
const customElement = [
    {
        elementType: 'h1',
        props: {},
        state: initalValue.state,
    },
    {
        elementType: 'button',
        props: {
            style: {
                width: '60px',
                height: "40px",
            },
            on: { click: () => { updateState(); } }
        },
        state: 'Add',
    },
];
initializeView(customElement);
function updateState() {
    customElement[0].state = customElement[0].state + 1;
    handleUpate(customElement);
}

//# sourceMappingURL=index.js.map