const baseURL = process.env.serverBaseURL;
export default function GetonePlayerInfo(pid, setpdata) {
  let data = fetch(baseURL + "/player/" + pid)
    .then((response) => response.json())
    .then((data) => setpdata(data))
    .catch((e) => {
      console.error(e);
    });
}
