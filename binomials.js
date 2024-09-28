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
function binomial(n, p, a){
    var ret = 0;
    var cumulativeProb = 0;
    //var tolerance = 0.00000000000001;
    for (var i = Number(a); i <= Number(n); i++){
        var prob = nCr(n, i) * (p ** i) * ((1 - p) ** (n - i));
        cumulativeProb += prob;
        /*
        if (prob < tolerance) {
            break;
        }
        */
        ret += prob;
    }
    
    return ret;
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