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
        standardweight += weights[key];
        document.getElementById("chance_" + key).className = "basictext";
        } else {
        weights[key] = weights[key] * rmc;
        standardweight += weights[key];
        document.getElementById("chance_" + key).className = "metereditem";
        }
    }
    console.log("Standard weight: " + standardweight);
    var mfweight = standardweight;
    //Update weights for standard items
    for (var key in weights){
        if (weights[key] / standardweight < 0.05){
        mfweight += (weights[key] * mfc) - weights[key];
        weights[key] = weights[key] * mfc;
        } 
    }
    console.log("Modded weight: " + mfweight);
    //Update chances for standard items
    for (var key in weights){
        var chance = (weights[key] / mfweight) * 100;
        document.getElementById("chance_" + key).innerText = chance.toFixed(3) + "%";
    }
    //Update standard weight with extra weights
    for (var key in extraweights){
        if (key != selecteddrop.value){
            standardweight += extraweights[key];
            mfweight += extraweights[key];
            document.getElementById("chance_" + key).className = "basictext";
        } else {
            extraweights[key] = extraweights[key] * rmc;
            standardweight += extraweights[key];
            mfweight += extraweights[key];
            document.getElementById("chance_" + key).className = "metereditem";
        }
    }
    var mfextraweight = standardweight;
    //Update weights for extra items
    for (var key in extraweights){
        if ( (extraweights[key] / standardweight) < 0.05){
            mfextraweight += (extraweights[key] * mfc) - extraweights[key];
            extraweights[key] = extraweights[key] * mfc;
        } 
    }
    //Update chances for extra items
    for (var key in extraweights){
        var chance = (extraweights[key] / mfextraweight) * 100;
        document.getElementById("chance_" + key).innerText = chance.toFixed(3) + "%";
    }
}