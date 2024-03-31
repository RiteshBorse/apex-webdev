import Fuse from 'https://cdn.jsdelivr.net/npm/fuse.js@7.0.0/dist/fuse.mjs'

//Fuse Library for search bar
let features = [
    {
        fun: 'document-wallet'
    },
    {
        fun: 'complaint-track'
    },
    {
        fun: 'ammenites-booking'
    }

];
const fuseOptions = {
    isCaseSensitive: false,
    // includeScore: false,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    // threshold: 0.6,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    // fieldNormWeight: 1,
    keys: [
        "fun"
    ]
};

export function search() {
    const funSearch = document.querySelector('.js-search-bar').value;
    const fuse = new Fuse(features, fuseOptions);
    const s = fuse.search(funSearch);
    return s;
}
