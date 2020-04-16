const qs = document.location.search;
const ifr = document.getElementById('npo-iframe');
const params = getSearchParams(qs);
document.title = params.title;
ifr.src = params.src;
