let appId="c6b09fa5fa4d87e71ebd519fd66c59c5";
let units='imperial';
let searchMethod;


function searchWeather(searchTerm){
   fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}')
}