// const API_KEY = '494aa2805b40a50e5ac06cc1ccb34823';//Model
// View start
// const inputField = document.getElementById('city');
// const searchBtn = document.getElementById('search-btn');
// const outputDiv = document.querySelector('.output');
// const conditionContainers = document.querySelectorAll('.condition');
// const cityInfo = document.querySelector('.city-info');
// const observeTime = document.querySelector('.observe-time');
// const errorDiv = document.querySelector('.error')
//View end
// let brokenData;//Model

// const getWeatherByCity = () => {
    // const city = inputField.value;//View
    // if (city !== '') {
        //Model
        // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`)
        //     .then(response => {
        //         console.log(response);
        //         return response.json();
        //     })
        //     .then(data => {
        //         if (!data.ok) {
        //             brokenData = data;
        //         }
                // errorDiv.style.display = 'none'//View

                // showInfo(data);//View

                // outputDiv.style.display = 'block'//View
            // })
            // .catch(error => {
                // console.log(error);
                // //View start
                // errorDiv.textContent = brokenData.message;
                // errorDiv.style.display = 'block'
                // outputDiv.style.display = 'none'
                //View end
            // })
    // } else {
        //View start
        // errorDiv.textContent = 'Please, input city!';
        // errorDiv.style.display = 'block'
        // outputDiv.style.display = 'none'
        //View end
//     }
// }

// const showInfo = (data) => {//View start
//     const countryCode = data.sys.country;
//     cityInfo.innerHTML = `
//             <span>
//                 ${data.name}, ${countryCode}
//                 <img src="http://openweathermap.org/images/flags/${countryCode.toLowerCase()}.png" alt="${countryCode}">
//             </span>
//             ${data.weather[0].description}`;

            //Model start
    // const availableDirections = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    // let windDirection = availableDirections[Math.floor((data.wind.deg / 22.5) + 0.5) % 16];
    //Model end

    //View start
    // const mainData = [
    //     `<span>${data.main.temp.toFixed(1)} °C</span>
    //                         (from ${data.main.temp_min.toFixed(1)} °C 
    //                         to ${data.main.temp_max.toFixed(1)} °C)`,
    //     `<span>${data.main.feels_like.toFixed(1)} °C</span>`,
    //     `<span>${data.main.pressure} hPa</span>`,
    //     `<span>${data.main.humidity}%</span>`,
    //     `<span>${data.wind.speed}m/s</span> (${windDirection})`,
    //     `<span>${data.clouds.all}%</span>`
    // ];

    // [...conditionContainers].forEach((container, index) => {
    //     container.innerHTML = mainData[index]
    // })
    //View end

    //Model start
    // const timestamp = new Date(data.dt * 1000);
    // const minutes = timestamp.getMinutes()
    // let time;
    // minutes > 9 ? time = `at ${timestamp.getHours()}:${timestamp.getMinutes()}` :
    //     time = `at ${timestamp.getHours()}:0${timestamp.getMinutes()}`;
    //Model end

    //View start
    // observeTime.setAttribute('class', 'observe-time');
    // observeTime.textContent = time;
    //View end
// }

// searchBtn.addEventListener('click', getWeatherByCity); //View

// document.body.addEventListener('keypress', (e) => {//View
//     if (e.key === 'Enter')
//         getWeatherByCity()
// })