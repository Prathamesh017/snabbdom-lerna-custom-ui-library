import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
  VNode,
} from '../../../node_modules/snabbdom/build/index'
import {customElementInterface} from "../../../interfaces/interface.ts"
const patch = init([
  // Init patch function with chosen modules
  classModule, // makes it easy to toggle classes
  propsModule, // for setting properties on DOM elements
  styleModule, // handles styling on elements with support for animations
  eventListenersModule, // attaches event listeners
])
const rootDocument = document && document.getElementById('root')

let currentDom:VNode= null
function handleChildren(customElement:customElementInterface[]) {
  return customElement.map((element:customElementInterface) => {
    return h(element.elementType, { ...element.props }, element.state)
  })
}
export function initializeView(customElement:customElementInterface[]) {
  const elementChildrenArray = handleChildren(customElement)
  const initialVDom = h(
    'div#root',
    { style: { display: 'flex', alignItems: 'center', gap: '10px' }, 
    hook: {
      create: () => {
        console.log('Component Mounted')
      },
    }, },
    elementChildrenArray,
  )
  patch(rootDocument, initialVDom)
  currentDom = initialVDom
  console.log('Component Mounted')
}

export function handleUpate(customElement:customElementInterface[]) {
  const elementChildrenArray = handleChildren(customElement)
  const newVDom = h(
    'div#root',
    {
      style: { display: 'flex', alignItems: 'center', gap: '10px' },
      hook: {
        update: () => {
          console.log('Component Update')
        },
      },
    },
    elementChildrenArray,
  )
  patch(currentDom, newVDom)
  currentDom = newVDom
}

