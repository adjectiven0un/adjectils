async function getUUIDbyName(name){
  
    document.getElementById("status").innerText = "Checking...";
    try {
      const check = await fetch("https://playerdb.co/api/player/minecraft/" + name);
      if (!check.ok){
        document.getElementById("status").innerHTML = "<span class = errored>Invalid username</span>";
        return -1;
      }
       const data = await check.json();
       var activeid = (data.data.player.raw_id);
       document.getElementById("status").innerHTML = "<span class = success>Found player! Data loaded</span>";
       return activeid;
    } catch (error) {
      document.getElementById("status").innerHTML = "<span class = errored>Invalid username</span>";
    }
}

async function getAPIdata(UUID){
  console.log("API call attempted");
  const controller = new AbortController();
  var timeout = setTimeout(() => {
      controller.abort(); // Abort the request after a timeout
  }, 5000);
  try {
    const apicall = await fetch("https://adjectilsbackend.adjectivenoun3215.workers.dev/v2/skyblock/profiles?uuid=" + UUID);
    clearTimeout(timeout);
    if (!apicall.ok){
        console.log("Api call error");
        document.getElementById("status").innerHTML = "<span class = errored>Invalid username or API error</span>";
        return -1;
    }
    return await apicall.json();
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log("API call timeout");
      document.getElementById("status").innerHTML = "<span class='errored'>API timed out</span>";
    } else {
        console.log("API call error:", error);
        document.getElementById("status").innerHTML = "<span class='errored'>API error</span>";
    }
  }
  
}

async function getStats(UUID){
  console.log("API call attempted");
  const controller = new AbortController();
  var timeout = setTimeout(() => {
      controller.abort(); // Abort the request after a timeout
  }, 5000);
  try {
    const apicall = await fetch("https://adjectilsbackend.adjectivenoun3215.workers.dev/player?uuid=" + UUID);
    if (!apicall.ok){
        console.log("Api call error");
        document.getElementById("status").innerHTML = "<span class = errored>Invalid username or API error</span>";
        return -1;
    }
    return await apicall.json();
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log("API call timeout");
      document.getElementById("status").innerHTML = "<span class='errored'>API timed out</span>";
    } else {
        console.log("API call error:", error);
        document.getElementById("status").innerHTML = "<span class='errored'>API error</span>";
    }
  }
  
  
}
async function updateProfiles(data) {
  try {
    console.log("Attempting to set profile ID...");
    profilelist = (data.profiles);
    for (var i = 0; i < 5; i++){
        document.getElementById("profile" + i).innerText = "–––––";
    }
    for (var i = 0; i < profilelist.length; i++){
        document.getElementById("profile" + i).innerText = profilelist[i].cute_name;
    }

    console.log("Checking new name");
    var profilenum = 0;
    for (var i = 0; i < profilelist.length; i++){
        if (profilelist[i].selected){
            console.log("Profile ID found: " + profilenum);
            profilenum = i;
            break;
        }
    }
    document.getElementById("profileid").value = profilenum;    
  } catch (TypeError){
      document.getElementById("status").innerHTML = "<span class = errored>No profiles found</span>";
      try {
        reset();
      } catch {
        
      }
  }
}
