const API_KEY = 'bd5001ff6282405f90fe87f63b756293';
const BASE_URL = 'https://newsapi.org/v2';
const options = {
            headers: {
                Authorization: API_KEY,
            },
        };

export default class NewsApiService {
    constructor() {
        this.searchQuery = '';
        this.pageSize = 5;
        this.page = 1;
    }

    fetchArticles() {  
        const url = `${BASE_URL}/everything?q=
        ${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;

        return fetch(url, options)
            .then(response => response.json())
            .then(({ articles }) => {
                this.incrementPage();

                return articles;
            });
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
};