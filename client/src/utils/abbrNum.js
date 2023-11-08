const abbrNum = (number) => {
    if (number >= 1e9) {
        const billion = (number / 1e9).toFixed(1);
        return billion.endsWith('.0') ? billion.slice(0, -2) + 'b' : billion + 'b';
    } else if (number >= 1e6) {
        const million = (number / 1e6).toFixed(1);
        return million.endsWith('.0') ? million.slice(0, -2) + 'm' : million + 'm';
    } else if (number >= 1e3) {
        const thousand = (number / 1e3).toFixed(1);
        return thousand.endsWith('.0') ? thousand.slice(0, -2) + 'k' : thousand + 'k';
    } else {
        return number.toString();
    }
}

export default abbrNum;