const API_KEY = "33bf64520ce50a9d40dfddcbaf764f39";
const COORDS = "coords";

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucess(positon) {
  const latitude = positon.coords.latitude;
  const longitude = positon.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
}

function handleGeoError() {
  console.log("Cant access geo location");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucess, handleGeoError);
}

function loadCoords() {
  const loadedCords = localStorage.getItem(COORDS);
  if (loadedCords === null) {
    askForCoords();
  } else {
    //getweather
  }
}

function init() {
  loadCoords();
}

init();
