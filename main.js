
send.onclick = function () {
    let city = document.getElementById('city').value;
    const KEY = '44698139a4c481d17cb6dbc1fc43ae58';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let temp = data.main.temp - 273.15;
            tempContainer.innerText = (temp.toFixed(2) + '°C');
            humidityContainer.innerText = (data.main.humidity + '%');
            pressureContainer.innerText = (data.main.pressure + 'hpa');
            windSpeedContainer.innerText = (data.wind.speed + 'm/s');

            windDirectionContainer.style.transform = `rotate(${data.wind.deg}deg)`

            flag.style.backgroundImage = `url(https://flagcdn.com/48x36/${data.sys.country.toLowerCase()}.png)`


            if (temp < 0) {
                wrap.style.backgroundColor = 'blue';
            } else {
                wrap.style.backgroundColor = 'red';
            }
        });
}
