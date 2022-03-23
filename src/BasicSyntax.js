export function romanToInteger(str) {
    let result = 0;
    const roman = {
        MM: 2000,
        M: 1000,
        CM: 900,
        DCC: 700,
        DC: 600,
        D: 500,
        CD: 400,
        CCC: 300,
        CC: 200,
        C: 100,
        XC: 90,
        LXX: 70,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        VIII: 8,
        VII: 7,
        VI: 6,
        V: 5,
        IV: 4,
        III: 3,
        II: 2,
        I: 1,
    };

    return str.split('').reduce(function (r, v, i, arr) {
        let a = roman[arr[i]];
        let b = roman[arr[i + 1]];
        if (b > a) {
            result = r - a;
        } else {
            result = r + a;
        }
        return result;
    }, 0);
}
