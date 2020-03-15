const DataStore = {
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    get(key) {
        return JSON.parse(localStorage.getItem(key));
    },
    remove(key) {
        return localStorage.removeItem(key);
    },
    clear() {
        localStorage.clear();
    }
}

export default DataStore
