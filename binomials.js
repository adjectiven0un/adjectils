//O(n) runtime complexity
function factorial(num){
    var ret = num;
    for (var i = num - 1; i > 1; i--){
        ret *= i;
    }
    return ret;
}
//Slightly less than O(n) runtime complexity
function nCr(n, r){
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
//Given trials n and probability p, determine the chance that p occurs at least once.
function binomial(n, p){
    var ret = 0;
    for (var i = 1; i <= parseInt(Math.floor(p * n)) + 100; i++){
        if (i > n){
            break;
        }
        ret += (nCr(n, i) * (p ** i) * ((1 - p) ** (n - i))); 
    }
    return ret;
}