import { Wind } from './wind';
import { Weather } from './weather';
import { City } from './city';

export class OpenWeather {
    public id: number;
    public name: string;
    public main: Weather;
    public wind: Wind;
    get avgTemp(): number {
        return (this.main.temp_max + this.main.temp_min) / 2;
    }
    constructor(id, name, main, wind) {
        this.id = id;
        this.name = name;
        this.main = main;
        this.wind = wind;
    }
}


