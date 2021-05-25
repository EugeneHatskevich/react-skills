import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.coincap.io/v2/',
});

const coinAPI = {
  getCoinList(currentPage, pageSize) {
    return instance.get(`assets/?limit=${pageSize}&offset=${(currentPage - 1) * pageSize}`).then((response) => response.data);
  },
  getAllCoin(currentPage, pageSize) {
    return instance.get(`assets/?offset=${(currentPage - 1) * pageSize}`).then((response) => response.data);
  },
  getTopList() {
    return instance.get('assets/?limit=3').then((response) => response.data);
  },
  getHistory(id) {
    return instance.get(`assets/${id}/history?interval=m5&start=${Date.now() - 24 * 3600 * 1000}&end=${Date.now()}`).then((response) => response.data);
  },
  getInfo(id) {
    return instance.get(`assets/${id}`).then((response) => response.data);
  },
};
export default coinAPI;
