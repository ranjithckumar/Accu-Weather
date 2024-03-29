let appId="c6b09fa5fa4d87e71ebd519fd66c59c5";
let units='imperial';
let searchMethod;

function getSearchMethod(searchTerm){
    if(searchTerm.length===5 && Number.parseInt(searchTerm)+''=== searchTerm)
    searchMethod=zip;
    else
    searchMethod='q';
}
// searchWeather function takes cityname argument
function searchWeather(searchTerm){
    getSearchMethod(searchTerm);
   fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`).then(result=> {
     return result.json();
   }).then(result=>{
         init(result);
   })
}
function init(resultFromServer){
//   console.log(resultFromServer);
  switch(resultFromServer.weather[0].main){
      case 'Clear':
          document.body.style.backgroundImage='url("./img/clear.jpg")';
          break;
      case 'Clouds':
            document.body.style.backgroundImage='url("./img/clouds.jpg")';
          break;
      case 'Rain':
      case 'Drizzle':
      case 'Mist':
            document.body.style.backgroundImage='url("./img/forest.jpg")';
          break;
      case 'Thunderstorm':
            document.body.style.backgroundImage='url("./img/storm.jpg")';
          break;
      case 'Snow':
            document.body.style.backgroundImage='url("./img/snow.jpg")';
          break;

      default: document.body.style.backgroundImage='url("./img/blue.jpg")';
          break;
  }
  let weatherDescriptionHeader = document.getElementById('weatherDescriptionHeader');
  let temperatureElement= document.getElementById('temperature');
  let humidityElement=document.getElementById('humidity');
  let windSpeedElement=document.getElementById('windSpeed');
  let cityHeader=document.getElementById('cityHeader');
  let weatherIcon=document.getElementById('documentIconImg');
  weatherIcon.src='http://openweathermap.org/img/w/'+ resultFromServer.weather[0].icon +'.png';
  let resultDescription=resultFromServer.weather[0].description;
  weatherDescriptionHeader.innerText=resultDescription.charAt(0).toUpperCase() + resultDescription.slice(1);
  let temp=(resultFromServer.main.temp);
  let celcius=(5/9)*(temp-32);
  temperatureElement.innerHTML=Math.floor(celcius) + '&#176';
  windSpeedElement.innerHTML='Winds at' + Math.floor(resultFromServer.wind.speed) + 'm/s';
  cityHeader.innerHTML=resultFromServer.name;
  humidityElement.innerHTML='Humidity levels at' + resultFromServer.main.humidity + '%';

  setPositionForWeatherInfo();
}
function setPositionForWeatherInfo(){
    let weatherContainer=document.getElementById('weatherContainer');
    let weatherContainerHeight=weatherContainer.clientHeight;
    let weatherContainerWidth=weatherContainer.clientWidth;
    weatherContainer.style.left=`calc(50% -${weatherContainerWidth/2}px)`;
    weatherContainer.style.top=`calc(50% - ${weatherContainerHeight/1.3}px)`;
    weatherContainer.style.visibility='visible';
}
//  click event trigger when user clicks on search button and value is transfered to searchWeather function
document.getElementById('searchBtn').addEventListener('click',()=>{
    let searchTerm=document.getElementById('searchInput').value;
    if(searchTerm)
    searchWeather(searchTerm);
})