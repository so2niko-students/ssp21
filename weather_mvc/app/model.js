export default class Model{
    API_KEY = '494aa2805b40a50e5ac06cc1ccb34823';
    availableDirections = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];

    constructor(handleLoadOK, handleLoadError){
        this.handleLoadOK = handleLoadOK;
        this.handleLoadError = handleLoadError;
    }

    createURL = city => {
        return `https://api.openweathermap.org/data/2.5/weather?q=${ city }&APPID=${ this.API_KEY }&units=metric`;
    }

    getWeather = (city) => {
        fetch(this.createURL(city))
            .then(response => response.json())
            .then(data => {
                data.cod == 200 ? this.returnOKData(data) : this.handleLoadError(data);
            });
    }

    returnOKData = data => {
        data = this.formatData(data);
        this.handleLoadOK(data);
    }

    formatData = data => {
        data.windDirection = this.availableDirections[Math.floor((data.wind.deg / 22.5) + 0.5) % 16];

        const timestamp = new Date(data.dt * 1000);
        const minutes = this.checkLeadingZero(timestamp.getMinutes());
        const hours = this.checkLeadingZero(timestamp.getHours());
        data.time =`at ${ hours }:${ minutes }`;
        
        return data;
    }

    checkLeadingZero = num => `${ num > 9 ? '0' : '' }${ num }`;

}

