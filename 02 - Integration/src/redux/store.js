import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

// Configuración del store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;