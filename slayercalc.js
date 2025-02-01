function updateChances(weights, extraweights){
    if (slayermagicfind.value > 900){
        mf = 900;
        document.getElementById("slayermagicfind").value = 900;
    }
    if (slayermagicfind.value < 0 || isNaN(slayermagicfind.value) || slayermagicfind.value == ""){
        mf = 0;
        document.getElementById("slayermagicfind").value = 0;
    }
    if (rngmeterpercent.value > 100) {
        document.getElementById("rngmeterpercent").value = 100;
        rmc = 3;
    } 
    else if (rngmeterpercent.value < 0 || isNaN(rngmeterpercent.value)){
        document.getElementById("rngmeterpercent").value = 0;
        rmc = 1;
    } else {
        rmc = (rngmeterpercent.value / 50) + 1;
    }
    var mfc = 1 + (slayermagicfind.value/100);
    console.log("Calcing chances for " + mfc + " coefficient");
    var standardweight = 10000;
    //Calculate total standard weight
    for (var key in weights){
        if (key != selecteddrop.value){
            standardweight = standardweight + weights[key];
            document.getElementById("chance_" + key).className = "basictext";
        } else {
            weights[key] = weights[key] * rmc;
            standardweight = standardweight + weights[key];
            document.getElementById("chance_" + key).className = "metereditem";
        }
    }
    console.log("Standard weight: " + standardweight);
    var mfweight = standardweight;
    //Update weights for standard items
    for (var key in weights){
        if (weights[key] / standardweight < 0.05){
        mfweight = mfweight + (weights[key] * mfc) - weights[key];
        weights[key] = weights[key] * mfc;
        } 
    }
    console.log("Modded weight: " + mfweight);
    //Update chances for standard items
    if (frac.value == 0){
        for (var key in weights){
            var chance = (weights[key] / mfweight) * 100;
            chances[key] = weights[key]/mfweight;
            document.getElementById("chance_" + key).innerText = chance.toFixed(3) + "%";
        }
    } else {
        for (var key in weights){
            var chance = (weights[key] / mfweight);
            chances[key] = weights[key]/mfweight;
            var denom = Math.ceil(1/chance);
            document.getElementById("chance_" + key).innerText = "1/" + denom;
        }
    }
    
    //Update standard weight with extra weights
    for (var key in extraweights){
        if (key != selecteddrop.value){
            standardweight = standardweight + extraweights[key];
            mfweight = mfweight + extraweights[key];
            document.getElementById("chance_" + key).className = "basictext";
        } else {
            extraweights[key] = extraweights[key] * rmc;
            standardweight = standardweight + extraweights[key];
            mfweight = mfweight + extraweights[key];
            document.getElementById("chance_" + key).className = "metereditem";
        }
    }
    var mfextraweight = standardweight;
    //console.log("Weight with extra items: " + mfextraweight);
    //Update weights for extra items
    for (var key in extraweights){
        if ( (extraweights[key] / standardweight) < 0.05){
            mfextraweight = mfextraweight + (extraweights[key] * mfc) - extraweights[key];
            extraweights[key] = extraweights[key] * mfc;
        } 
    }
    //console.log("Modded extra weight: " + mfextraweight);
    //Update chances for extra items
    if (frac.value == 0){
        for (var key in extraweights){
            var chance = (extraweights[key] / mfextraweight) * 100;
            chances[key] = extraweights[key]/mfweight;
            document.getElementById("chance_" + key).innerText = chance.toFixed(3) + "%";
        }
    } else {
        for (var key in extraweights){
            var chance = (extraweights[key] / mfextraweight);
            chances[key] = extraweights[key]/mfweight;
            var denom = Math.ceil(1/chance);
            document.getElementById("chance_" + key).innerText = "1/" + denom;
        }
    }
    
}

function gcd(a, b){
    if (!b) return a;
    return gcd (b, a % b);
}