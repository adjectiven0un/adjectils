//Converts Minecraft username to UUID. 
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
const API_BASE = "https://adjectilsbackend.adjectivenoun3215.workers.dev";

// Shared fetch wrapper
async function apiFetch(url) {
  const controller = new AbortController();

  const timeout = setTimeout(() => {
    controller.abort();
  }, 5000);

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        "X-Timestamp": Date.now().toString(),
      },
    });

    clearTimeout(timeout);
    return res;
  } catch (error) {
    clearTimeout(timeout);
    throw error;
  }
}

// Profile data
async function getAPIdata(UUID) {
  console.log("API call attempted");

  try {
    const url =
      `${API_BASE}/v2/skyblock/profiles?uuid=${encodeURIComponent(UUID)}`;

    const apicall = await apiFetch(url);

    if (!apicall.ok) {
      console.log("API call error");
      document.getElementById("status").textContent =
        "Invalid username or API error";
      document.getElementById("status").className = "errored";
      return -1;
    }

    return await apicall.json();
  } catch (error) {
    handleApiError(error);
  }
}

// Player stats
async function getStats(UUID) {
  console.log("API call attempted");

  try {
    const url =
      `${API_BASE}/player?uuid=${encodeURIComponent(UUID)}`;

    const apicall = await apiFetch(url);

    if (!apicall.ok) {
      console.log("API call error");
      document.getElementById("status").textContent =
        "Invalid username or API error";
      document.getElementById("status").className = "errored";
      return -1;
    }

    return await apicall.json();
  } catch (error) {
    handleApiError(error);
  }
}

// Profile UI update
async function updateProfiles(data) {
  try {
    console.log("Attempting to set profile ID...");

    const profilelist = data?.profiles;

    if (!Array.isArray(profilelist)) {
      throw new TypeError("Invalid profile data");
    }

    const statusEl = document.getElementById("status");

    // Reset buttons
    for (let i = 0; i < 5; i++) {
      const btn = document.getElementById("profile" + i);
      if (!btn) continue;

      btn.innerText = "–––––";
      btn.disabled = true;
    }

    // Populate available profiles
    const max = Math.min(5, profilelist.length);

    for (let i = 0; i < max; i++) {
      const btn = document.getElementById("profile" + i);
      if (!btn) continue;

      btn.innerText = profilelist[i].cute_name;
      btn.disabled = false;
    }

    console.log("Checking selected profile");

    let profilenum = 0;

    for (let i = 0; i < profilelist.length; i++) {
      if (profilelist[i].selected) {
        profilenum = i;
        console.log("Profile ID found: " + profilenum);
        break;
      }
    }

    const input = document.getElementById("profileid");
    if (input) {
      input.value = profilenum;
    }
  } catch (error) {
    document.getElementById("status").textContent =
      "No profiles found";
    document.getElementById("status").className = "errored";

    try {
      reset();
    } catch (e) {
      // ignore
    }
  }
}

// Centralized error handler
function handleApiError(error) {
  if (error.name === "AbortError") {
    console.log("API call timeout");
    document.getElementById("status").textContent =
      "API timed out";
  } else {
    console.log("API call error:", error);
    document.getElementById("status").textContent =
      "API error";
  }

  document.getElementById("status").className = "errored";
}
