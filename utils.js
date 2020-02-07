/* api为查询杭州的jsonp
*  心知天气
*  https://docs.seniverse.com/
*
*/
const api = 'http://api.seniverse.com/v3/weather/now.json?location=hangzhou&ts=1581077699&uid=PN0FxvpbqJsDdk9Fd&sig=qzMYdgIPWvI7YcSN%2Fcn%2BrdNFO5E%3D&callback=jsonpCallback';
const jsonpCallback = data => {
  const weather = data.results[0];
  const { now, location } = weather;
  const tempObj = document.getElementById('temp');
  const weatherObj = document.getElementById('weather-description');
 
  if (location && now) {
    tempObj.innerHTML = `${now.temperature}°`;
    weatherObj.innerHTML = `${location.name}  ${now.text}`;
  } else {
    tempObj.innerHTML = `  🌞🌧`;
    weatherObj.innerHTML = `杭州今天啥天气啊？`;
  }
 
}

const getWeatherInfo = () => {
  const newScript = document.createElement('script');
  newScript.type = 'text/javascript';
  newScript.src = api;
  document.getElementsByTagName('body')[0].append(newScript);
}

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
  getWeatherInfo();
  
  // Set up the clock
  document.getElementById("clock").innerHTML = getTime();
  // Set clock interval to tick clock
  setInterval( () => {
    document.getElementById("clock").innerHTML = getTime();
  },100);
}

