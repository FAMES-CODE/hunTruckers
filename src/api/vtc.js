const baseURL = process.env.serverBaseURL;
function GetOneVtcInfo(vtcid, setvtcdata) {
  let data = fetch(baseURL + "/vtc/" + vtcid)
    .then((response) => response.json())
    .then((data) => setvtcdata(data))
    .catch((e) => {
      console.error(e);
    });
}

export default GetOneVtcInfo;
