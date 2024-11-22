//O(n) runtime complexity
function factorial(num){
    var ret = num;
    for (var i = num - 1; i > 1; i--){
        ret *= i;
    }
    return ret;
}
//Slightly less than O(n) runtime complexity
function nCrOutdated(n, r){
    if (r > n){
        return -1;
    }
    var ret = 1;
    var upperr;
    if (r < n/2){
        upperr = n - r;
    } else {
        upperr = r;
        r = n - r;
    }
    for (var i = n; i > upperr; i--){
        ret *= i;
    }
    for (var i = 2; i <= r; i++){
        ret /= i;
    }
    return ret;
}
function nCr(n, r) {
    if (r > n) {
        console.log("Invalid nCr input!");
        return 0;
    }
    r = Math.min(r, n - r);
    let ret = 1;
    for (let i = 0; i < r; i++) {
        ret *= (n - i);
        ret /= (i + 1);
    }
    return ret;
}
function logfactorial(x) {
    let result = 0;
    for (let i = 2; i <= x; i++) {
        result += Math.log(i);
    }
    return result;
}

function lognCr(n, r) {
    if (r > n) return -Infinity;
    return logfactorial(n) - logfactorial(r) - logfactorial(n - r);
}

//Given trials n and probability p, determine the chance that p occurs at least once.
function binomial(n, p, a){
    var ret = -Infinity;
    var cap = Math.min(n, 999);
    for (var i = Number(a); i <= Number(cap); i++){
        var prob = lognCr(n, i) + i * Math.log(p) + (n - i) * Math.log(1 - p);
        ret = Math.log(Math.exp(ret) + Math.exp(prob));
    }
    
    return Math.exp(ret);
}

//Given trials n and probability p, determine the chance that p occurs between a and b times.
function binomialRange(n, p, a, b){
    if (a < 0 || b < 0 || b < a) {
        console.log("Invalid binomial input!");
    }
    var ret = 0;
    for (var i = a; i <= b; i++){
        if (i > n){
            break;
        }
        ret += (nCr(n, i) * (p ** i) * ((1 - p) ** (n - i)));
    }
    
    return ret;
}