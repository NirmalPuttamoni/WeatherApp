const locationRef = document.querySelector('.location');
const iconRef = document.querySelector('.icon');
const temperatureRef = document.querySelector('.temperature');
const timeRef = document.querySelector('.time');
const textRef = document.querySelector('.text');
const buttonRef = document.querySelector('.footer button');
const inputRef = document.querySelector('.footer input');
const windspdRef = document.querySelector('.wind-speed-val');
const humidityRef = document.querySelector('.humidity-val');

// 1. On click, get location name
buttonRef.addEventListener('click', (event) => {
    event.preventDefault();
    const city = inputRef.value;
    console.log(city);
    fetchData(city);
} );

inputRef.addEventListener("keypress", event => {
    if(event.key==='Enter'){
        event.preventDefault();
        buttonRef.click();
    }
} )

// 2. Make an API call to server to get weather details
function fetchData(location){
    fetch(`http://api.weatherapi.com/v1/current.json?key=31014a17aebc42de9e561910233012&q=${location}&aqi=no`)
        .then( res => res.json())
        .then(data => updateData(data))
        .catch( err => {console.log(err)})
}

// 3. Update data in DOM
function updateData(obj){
    // console.log(obj);
    locationRef.innerText = obj.location.name;
    temperatureRef.innerText = obj.current.temp_c+" °C";
    timeRef.innerText = obj.current.last_updated;
    iconRef.src = obj.current.condition.icon;
    textRef.innerText = obj.current.condition.text;
    windspdRef.innerText= obj.current.wind_kph+" kmph";
    humidityRef.innerText=obj.current.humidity+"%";
    // humidityRef.innerHTML= `
    // <span>kmph</span>`
}