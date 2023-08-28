export function setLocal(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getLocal(key) {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
}

export function removeLoacal(key) {
    localStorage.removeItem(key);
}