import { createStore, compose, applyMiddleware } from 'redux';
import reducers from '@redux';
import thunk from 'redux-thunk';
import { createNetworkMiddleware } from 'react-native-offline';

const networkMiddleware = createNetworkMiddleware({
    queueReleaseThrottle: 200,
});

const middlewares = [
    thunk,
    networkMiddleware
];

export default configureStore = () => {
    const store = compose(applyMiddleware(...middlewares))(createStore)(reducers);
    return store;
}