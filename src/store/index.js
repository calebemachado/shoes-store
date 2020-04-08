import { createStore } from 'redux'

import rootDeducer from './modules/rootReducer'

const store = createStore(rootDeducer)

export default store
