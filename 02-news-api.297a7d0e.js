const e={headers:{Authorization:"bd5001ff6282405f90fe87f63b756293"}};const t={searchForm:document.querySelector(".form-inline"),articlesContainer:document.querySelector(".js-articles-container"),showMoreBtn:document.querySelector('[data-action="load-more"]')},r=new class{fetchArticles(){const t=`https://newsapi.org/v2/everything?q=\n        ${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;return fetch(t,e).then((e=>e.json())).then((({articles:e})=>(this.incrementPage(),e)))}incrementPage(){this.page+=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}constructor(){this.searchQuery="",this.pageSize=5,this.page=1}},n=e=>{let r="";for(let t=0;t<e.length;t+=1)r+=i(e[t]);t.articlesContainer.insertAdjacentHTML("beforeend",r)},i=({author:e,title:t,url:r,urlToImage:n,publishedAt:i})=>`\n    <li>\n        <img src='${n}' alt="" >\n        <div>\n            <h4><a href='${r}'>${t}</a></h4>\n                <ul>\n                    <li>Author: ${e}</li>\n                    <li>Date: ${i}</li>\n                </ul>\n        </div>        \n    </li>`,a=()=>{t.articlesContainer.innerHTML=""};t.searchForm.addEventListener("submit",(e=>{e.preventDefault(),a(),r.query=e.currentTarget.elements.query.value,r.resetPage(),r.fetchArticles().then(n)})),t.showMoreBtn.addEventListener("click",(()=>{r.fetchArticles().then(n)}));
//# sourceMappingURL=02-news-api.297a7d0e.js.map