import { convertToFarenheit, convertToDegreeCelsius, roundOffdata, abstractTemperatureInfo } from './weatherUtils';

describe('Test utility', () => {
    it('should convert a value in Degree to Farenheit', () => {
        expect(convertToFarenheit(5)).toEqual(41)
        expect(convertToFarenheit(10)).toEqual(50)
    })

    it('it should convert a value in Farenheit to Degree', () => {
        expect(convertToDegreeCelsius(32)).toEqual(0)
        expect(convertToDegreeCelsius(50)).toEqual(10.0)
    })

    it('should round off to given position by executing the roundoff function', () => {
        expect(roundOffdata(23.23, 10)).toEqual(23.2);
    })

    it('should abstract and revert back with the exected data to display weather widget', () => {
        const spyData = {
            main: {
                temp: 10,
                test: 'unwanted',
                feels_like: 7,
                temp_min: 5,
                temp_max: 10
            }
        };

        expect(abstractTemperatureInfo(spyData)).toEqual({
            temp: spyData.main.temp,
            feelsLike: spyData.main.feels_like,
            tempMin: spyData.main.temp_min,
            tempMax: spyData.main.temp_max
        });
    })
});
