import { Wind } from './wind';
import { Weather } from './weather';
import { Forecast } from './forecast';

export class OpenWeather {
    public id: number;
    public name: string;
    public main: Weather;
    public wind: Wind;
    public show: boolean = false;
    public forecast: Forecast = null;

    get avgTemp(): number {
        return (this.main.temp_max + this.main.temp_min) / 2;
    }
    constructor(id: number, name: string, main: Weather, wind: Wind) {
        this.id = id;
        this.name = name;
        this.main = main;
        this.wind = wind;

    }
}


