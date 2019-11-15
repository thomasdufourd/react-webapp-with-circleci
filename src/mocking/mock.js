import fetchMock from 'fetch-mock';
import now from './now.json';

fetchMock.get('/api/now', now);