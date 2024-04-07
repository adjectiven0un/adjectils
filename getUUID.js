async function getUUIDbyName(name){
  
    document.getElementById("status").innerText = "Checking...";
    try {
      const check = await fetch("https://playerdb.co/api/player/minecraft/" + name);
      if (!check.ok){
        document.getElementById("status").innerHTML = "<span class = errored>Invalid username</span>";
      }
       const data = await check.json();
       var activeid = (data.data.player.raw_id);
       document.getElementById("status").innerHTML = "<span class = success>Found player! Data loaded</span>";
       return activeid;
    } catch (error) {
      document.getElementById("status").innerHTML = "<span class = errored>Invalid username</span>";
    }
  }
  
  var key = "3b597353-f337-414a-8857-f8521d35d8f4"