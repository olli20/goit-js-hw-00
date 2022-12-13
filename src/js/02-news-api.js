import NewsApiService from './news-service';

const refs = {
    searchForm: document.querySelector('.form-inline'),
    articlesContainer: document.querySelector('.js-articles-container'),
    showMoreBtn: document.querySelector('[data-action="load-more"]'),
}

const newsApiService = new NewsApiService();

const onSearch = (event) => {
    event.preventDefault();
    clearArticlesContainer();
    newsApiService.query = event.currentTarget.elements.query.value;
    newsApiService.resetPage();
    newsApiService.fetchArticles().then(insertArticles);
};

const onLoadMore = () => {
    newsApiService.fetchArticles().then(insertArticles);  
};

const insertArticles = (response) => {
    let markup = '';
    for (let i = 0; i < response.length; i += 1) {
        markup += articleTpl(response[i]);
    };
    refs.articlesContainer.insertAdjacentHTML('beforeend', markup);
};

const articleTpl = ({ author, title, url, urlToImage, publishedAt }) =>  `
    <li>
        <img src='${urlToImage}' alt="" >
        <div>
            <h4><a href='${url}'>${title}</a></h4>
                <ul>
                    <li>Author: ${author}</li>
                    <li>Date: ${publishedAt}</li>
                </ul>
        </div>        
    </li>`;

const clearArticlesContainer = () => {
    refs.articlesContainer.innerHTML = '';
}

refs.searchForm.addEventListener('submit', onSearch);
refs.showMoreBtn.addEventListener('click', onLoadMore); 






