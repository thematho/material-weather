export class ServiceSettings {
    private static WEATHER_BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';
    private static WEATHER_QUERY_PARAMS = '&units=metric';

    // TODO: This API KEY should be provided by a backend service endpoint, and
    // never submit access keys into the repo.
    // One solution is use RSA, however security is not the main focus of this assignment.
    // Check this example of how to use RSA with ExpressJS:
    // https://github.com/thematho/NG6-starter/blob/NG6-MEAN-Template/server/services/security/security.service.js
    private static API_KEY = '640b572a5998a06986d1b25a24e422f6';

    public static getWeatherURL(id: number) {
        return `${this.WEATHER_BASE_URL}?id=${id}${this.WEATHER_QUERY_PARAMS}&appid=${this.API_KEY}`
    }
}