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
  const apicall = await fetch("https://adjectilsbackend.adjectivenoun3215.workers.dev/skyblock/profiles?uuid=" + UUID);
  if (!apicall.ok){
      console.log("Api call error");
      document.getElementById("status").innerHTML = "<span class = errored>Invalid username or API error</span>";
      return -1;
  }
  return await apicall.json();
}

async function getStats(UUID){
  console.log("API call attempted");
  const apicall = await fetch("https://adjectilsbackend.adjectivenoun3215.workers.dev/player?uuid=" + UUID);
  if (!apicall.ok){
      console.log("Api call error");
      document.getElementById("status").innerHTML = "<span class = errored>Invalid username or API error</span>";
      return -1;
  }
  return await apicall.json();
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
    lastname = name;
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
