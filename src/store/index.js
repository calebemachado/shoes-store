import { createStore } from 'redux'

import rootDeducer from './modules/rootReducer'

const enhancer = process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null

const store = createStore(rootDeducer, enhancer)

export default store
