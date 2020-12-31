import { persistCombineReducers } from 'redux-persist';
import AsyncStore from '@react-native-community/async-storage';
import {reducer as network} from 'react-native-offline';
import {reducer as home} from './Home';

const config = {
    key: 'root',
    storage: AsyncStore,
    blacklist: ['network']
}

export default persistCombineReducers(config, {
    network:network,
    home:home,
});