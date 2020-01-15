/**
BTS Sensor Tech extension
*/
//% weight=70 icon="\uf1ec" color=#EC7505
namespace BTS {
    /**
     * Calculate the fire danger rating from temperature, windspeed, and humidity.
     */
    //% inlineInputMode=external
    //% blockId=BTS_fireDanger block="Calculate Fire Danger Rating|Temperature %temp|Wind Speed %windspeed|Humidity %humidity"
    export function fireDanger(temp: number, windspeed: number, humidity: number) {
        let ffdi: number;
        let dangerRating: string;

        ffdi = (Math.map(temp, 15, 35, 0, 10) + Math.map(windspeed, 0, 10, 0, 10) + Math.map(100 - humidity, 20, 70, 0, 10))
        if (ffdi < 5) {
            dangerRating = "Low"
        } else if (ffdi < 10) {
            dangerRating = "High"
        } else if (ffdi < 15) {
            dangerRating = "Very High"
        } else if (ffdi < 20) {
            dangerRating = "Severe"
        } else if (ffdi < 25) {
            dangerRating = "Extreme"
        } else {
            dangerRating = "Code Red"
        }
        return dangerRating
    }
}