let appId="c6b09fa5fa4d87e71ebd519fd66c59c5";
let units='imperial';
let searchMethod='zip';


function searchWeather(searchTerm){
   fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`).then(result=> {
     return result.json();
   }).then(result=>{
         init(result);
   })
}
function init(resultFromServer){
  console.log(resultFromServer);
}
document.getElementById('searchBtn').addEventListener('click',()=>{
    let searchTerm=document.getElementById('searchInput').value;
    if(searchTerm)
    searchWeather(searchTerm);
})