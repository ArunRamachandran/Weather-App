import { convertToFarenheit, convertToDegreeCelsius } from './weatherUtils';

describe('Test utility', () => {
    it('should convert a value in Degree to Farenheit', () => {
        expect(convertToFarenheit(5)).toEqual(41)
        expect(convertToFarenheit(10)).toEqual(50)
    })

    it('it should convert a value in Farenheit to Degree', () => {
        expect(convertToDegreeCelsius(32)).toEqual(0)
        expect(convertToDegreeCelsius(50)).toEqual(10.0)
    })
});
