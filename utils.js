// Get current time and format
function getTime() {
  let date = new Date(),
  min = date.getMinutes(),
  sec = date.getSeconds(),
  hour = date.getHours();

  return "" + 
    (hour < 10 ? ("0" + hour) : hour) + ":" + 
    (min < 10 ? ("0" + min) : min) + ":" + 
    (sec < 10 ? ("0" + sec) : sec);
}

window.onload = () => {
  let xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.lvxiang.site/api/tools/getWeatherApi');
  xhr.onload = () => {
    if (xhr.readyState === 4) {

      const tempObj = document.getElementById('temp');
      const weatherObj = document.getElementById('weather-description');

      if (xhr.status === 200) {
        let json = JSON.parse(xhr.responseText);

        const weather = json.results[0];
        const { now, location } = weather;

        if (location && now) {
          tempObj.innerHTML = `${now.temperature}°`;
          weatherObj.innerHTML = `${location.name}  ${now.text}`;
        } else {
          tempObj.innerHTML = `  🌞🌧`;
          weatherObj.innerHTML = `杭州今天啥天气啊？`;
        }
      } else {
        tempObj.innerHTML = `  🌞🌧`;
        weatherObj.innerHTML = `杭州今天啥天气啊？`;
      }
    }
  }
  xhr.send();
  // Set up the clock
  document.getElementById("clock").innerHTML = getTime();
  // Set clock interval to tick clock
  setInterval( () => {
      document.getElementById("clock").innerHTML = getTime();
  },100);
}


