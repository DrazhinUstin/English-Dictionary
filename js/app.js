import setupSearch from "./modules/setupSearch.js";

document.addEventListener('DOMContentLoaded', setupSearch);

window.addEventListener('load', () => {
    setTimeout(() => document.querySelector('.preloader').classList.add('hide'), 200);
});