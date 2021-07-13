import Model from "./model.js";
import View from "./view.js";

export default class Controller{
    constructor(){
        this.view = new View(this.handleGetWeather);
        this.model = new Model(this.handleLoadOK, this.handleLoadError);
    }

    handleGetWeather = () => {
        const city = this.view.getCity();

        if(city == ''){
            this.view.showError();
            return;
        }

        this.model.getWeather(city);
    }

    handleLoadOK = data => {
        this.view.toggleOutputError();
        this.view.renderInfo(data);
    }

    handleLoadError = data => {
        this.view.toggleOutputError(false);
        this.view.renderError(data);
    }
}