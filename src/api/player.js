const baseURL = process.env.serverBaseURL;
function GetonePlayerInfo(pid, setpdata) {
  let data = fetch(baseURL + "/player/get/" + pid)
    .then((response) => response.json())
    .then((data) => setpdata(data))
    .catch((e) => {
      console.error(e);
    });
}

export default GetonePlayerInfo;
