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
  
