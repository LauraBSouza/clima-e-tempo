
const key = "c6673c0d07d9f7b4e9923bb178d4421d"

function viewDados(dados){
    console.log(dados)
    document.querySelector(".city").innerHTML = "Tempo em " + dados.name
    document.querySelector(".weather").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".weather-text").innerHTML = dados.weather[0].description
    document.querySelector(".humidity").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".weather-img").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector(".termico").innerHTML = "Sensação Térmica: " + Math.floor(dados.main.feels_like) + "°C"
    document.querySelector(".vento").innerHTML = "Vento: " + Math.floor(dados.wind.speed * 3.6) + "km/h"
    document.querySelector(".nebulosidade").innerHTML = "Nebulosidade: " + Math.floor(dados.clouds.all) + "%"
}

async function searchCity(city){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    viewDados(dados)
    
}

function clickButton(){
    const city = document.querySelector(".input-city").value

    searchCity(city)
}

const horas = document.querySelector("#horas");
const minutos = document.querySelector("#minutos");
const segundos = document.querySelector("#segundos");


const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if(hr < 10){
        hr = "0" + hr;
    }

    if(min < 10){
        min = "0" + min;
    }

    if(s < 10){
        s = "0" + s;
    }

    horas.innerHTML = hr;
    minutos.innerHTML = min;
    segundos.innerHTML = s;
})