export class ServiceSettings {
    private static BASE_URL = 'http://api.openweathermap.org/data/2.5/';
    private static METRIC_QUERY_PARAMS = '&units=metric';

    // TODO: This API KEY should be provided by a backend service endpoint, and
    // never submit access keys into the repo.
    // One solution is use RSA, however security is not the main focus of this assignment.
    // Check this example of how to use RSA with ExpressJS:
    // https://github.com/thematho/NG6-starter/blob/NG6-MEAN-Template/server/services/security/security.service.js
    private static API_KEY = '640b572a5998a06986d1b25a24e422f6';

    public static getWeatherURL(id: number) {
        return `${this.BASE_URL}/weather?id=${id}${this.METRIC_QUERY_PARAMS}&appid=${this.API_KEY}`
    }

    static getForecastURL(id: number): any {
        return `${this.BASE_URL}/forecast?id=${id}${this.METRIC_QUERY_PARAMS}&appid=${this.API_KEY}`
    }
}