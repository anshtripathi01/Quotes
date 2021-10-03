fetch('https://api.covid19api.com/summary')
.then( (apiData)=>{
return apiData.json();
}).then((mainData)=>{
    
const msg =mainData.Countries[76];
console.log(msg);
document.querySelector('#coviddata').innerHTML=`${msg.Country}`;
document.querySelector('.newcases').innerHTML= ` ${msg.NewConfirmed}`;
document.querySelector('.newdeaths').innerHTML= ` ${msg.NewDeaths}`;
document.querySelector('.totalcases').innerHTML=`${msg.TotalConfirmed}`;
document.querySelector('.totaldeaths').innerHTML=`${msg.TotalDeaths}`;
})
.catch((error)=>{
alert(`there is an issues with app:${error}`);
});