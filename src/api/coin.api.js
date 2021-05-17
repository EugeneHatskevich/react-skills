import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.coincap.io/v2/'
})

export const coinAPI = {
    getCoinList(currentPage, pageSize) {
        return instance.get(`assets/?limit=${pageSize}&offset=${(currentPage-1) * pageSize}`
        ).then(response => response.data)
    },
    getTopList() {
        return instance.get(`assets/?limit=3`
        ).then(response => response.data)
    },
}
