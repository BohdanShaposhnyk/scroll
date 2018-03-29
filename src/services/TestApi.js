const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export default class TestApi {
    static getPage({ pageId, header }) {
        return fetch(`${BASE_URL + header}?_page=${pageId}`)
            .then(responce => responce.json());
    }
}