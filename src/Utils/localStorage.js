// This file contains functions to get and set data in local storage;
const getFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

const setToLocalStorage = (key, data) => {
    return localStorage.setItem(key, JSON.stringify(data));
}

export { getFromLocalStorage, setToLocalStorage }