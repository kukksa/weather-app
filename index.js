const api = {
    endpoint:"https://api.openweathermap.org/data/2.5/",
    key:"6cac9590088d4fae668c492ce068d2d4"
}

const input = document.querySelector ("#input");
input.addEventListener ("keydown", enter);

function enter (e) {
    if(e.key === "Enter"){
        getInfo(input.value);
    }
}
async function getInfo(data) {
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
    const result = await res.json();
    displayResult(result)
}

function displayResult(result) {
    let city = document.querySelector ("#city");
    city.textContent =`${result.name}, ${result.sys.country}`;


getOurDate();


let temperature = document.querySelector("#temperature");
temperature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;

let feelsLike = document.querySelector("#feelsLike");
feelsLike.innerHTML = "Feels like: " +`${Math.round(result.main.feels_like)}<span>°</span>`;

let conditions = document.querySelector("#conditions");
conditions.textContent = `${result.weather[0].main}`

let variation = document.querySelector("#variation");
variation.innerHTML = "Min: " + `${Math.round(result.main.temp_min)}<span>°</span>` + " Max: " + `${Math.round(result.main.temp_max)}<span>°</span>`;

}

function getOurDate() {
const myDate = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// день недели
let day = days[myDate.getDay()];
console.log(day);
// число
let todayDate = myDate.getDate();
// месяц
let month = months[myDate.getMonth()];
// год
let year = myDate.getFullYear();

let showDate = document.querySelector ("#date");
showDate.textContent = `${day}`+ " " + `${todayDate}`+" "+`${month}`+" "+`${year}`;

}

gsap.from("#input", {zIndex:-1, opacity: 0, duration: 1.8, delay: 0.3});
gsap.from("p", {zIndex:-1, opacity: 0, duration: 2.5, delay: 0.8, ease: "power4.in"});
    

