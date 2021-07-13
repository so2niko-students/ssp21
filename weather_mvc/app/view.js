export default class View{
    dom = {
        inputField  : document.querySelector('#city'),
        errorDiv    : document.querySelector('.error'),
        outputDiv   : document.querySelector('.output'),
        searchBtn   : document.querySelector('#search-btn'),
        cityInfo    : document.querySelector('.city-info'),
        conditionContainers : [...document.querySelectorAll('.condition')],
        observeTime : document.querySelector('.observe-time')
    }

    constructor(handleGetWeather){
        this.dom.searchBtn.addEventListener('click', handleGetWeather);
        document.body.addEventListener('keypress', e => e.key === 'Enter' && handleGetWeather());
    }

    getCity = () => {
        return this.dom.inputField.value;
    }

    showError = () => {
        this.dom.errorDiv.textContent = 'Please, input city!';
        this.dom.errorDiv.style.display = 'block';
        this.dom.outputDiv.style.display = 'none';
    }

    renderInfo = data => {
        const countryCode = data.sys.country;
        this.dom.cityInfo.innerHTML = `
                <span>
                    ${ data.name }, ${ countryCode }
                    <img src="http://openweathermap.org/images/flags/${ countryCode.toLowerCase() }.png" alt="${ countryCode }">
                </span>
                ${data.weather[0].description}`;

        const mainData = [
            `<span>${data.main.temp.toFixed(1)} °C</span>
                                (from ${data.main.temp_min.toFixed(1)} °C 
                                to ${data.main.temp_max.toFixed(1)} °C)`,
            `<span>${data.main.feels_like.toFixed(1)} °C</span>`,
            `<span>${data.main.pressure} hPa</span>`,
            `<span>${data.main.humidity}%</span>`,
            `<span>${data.wind.speed}m/s</span> (${data.windDirection})`,
            `<span>${data.clouds.all}%</span>`
        ];
    
        this.dom.conditionContainers.forEach((container, index) => {
            container.innerHTML = mainData[index];
        });

        this.dom.observeTime.setAttribute('class', 'observe-time');
        this.dom.observeTime.textContent = data.time;
    }

    toggleOutputError = (isShow = true) => {
        if(isShow){
            this.dom.errorDiv.style.display = 'none';
            this.dom.outputDiv.style.display = 'block';
        }else{
            this.dom.outputDiv.style.display = 'none';
            this.dom.errorDiv.style.display = 'block';
        }
    }

    renderError = data => {
        this.dom.errorDiv.textContent = data.message;
    }
}