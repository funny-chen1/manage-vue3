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

export function formatNumber(num) {
    if (isNaN(num)) return 0;
    if (typeof num === 'string') {
        num = parseFloat(num.replace(/[^\d.-]/g, ''));
        if (isNaN(num)) return 0;
    }
    const parts = num.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
}

export function getTodayDate() {
    const now = new Date();
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, 0);
    const day = String(now.getDate()).padStart(2, 0);
    return `${year}-${month}-${day}`;
}
