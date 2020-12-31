import { Config } from '@common';
import axios from 'axios';

const baseURL = Config.server_url;
const client_id = Config.client_id;

export default api = axios.create({
    baseURL: baseURL,
    timeout: 10000,
    headers: {
        Accept:'*/*',
    }
});

// export const getPhotos = (page = 1) => api.get('photos', { client_id: client_id, page: page }).then((res) => res)
