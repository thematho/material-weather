import { Coordinates } from './coordinates';
import { Weather } from './weather';

export class City {

    public id: number;
    public name: string;
    public country: string;
    public coord: Coordinates;
    
    constructor(id: number, name: string, country: string, coord: Coordinates) {
        this.id = id;
        this.name = name;
        this.country = status;
        this.coord = coord;
    }

}