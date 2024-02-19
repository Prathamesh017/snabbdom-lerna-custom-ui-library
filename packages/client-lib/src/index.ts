import { initializeView,handleUpate} from '../../custom-ui-library/src/custom.ui.library';
import {customElementInterface} from "../../../interfaces/interface.ts"

let initalValue:{state:number}={
  state:0
};
const customElement:customElementInterface[] = [
  {
    elementType: 'h1',
    props: {},
    state: initalValue.state,
  },
  {
    elementType: 'button',
    props:{
    style: {
      width: '60px',
      height:"40px",
    },
    on: { click: () =>updateState()}
  },
    state: 'Add',
  },
]
initializeView(customElement)



function updateState(){
  customElement[0].state=(customElement[0].state as number)+1;
  handleUpate(customElement);
}
console.log("HELLO");