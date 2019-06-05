import { Wind } from "./wind";
import { Weather } from './weather';
import { Forecast } from './forecast';

export class OpenWeather {
    public forecast: Forecast = null;

    constructor(public id: number, public name: string, public main: Weather, public wind: Wind) { }

    get avgTemp(): number {
        let avg = (this.main.temp_max + this.main.temp_min) / 2;
        return Number(avg.toFixed(1));
    }
}


