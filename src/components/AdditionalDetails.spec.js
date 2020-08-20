import React from 'react';
import { mount } from 'enzyme';
import { AdditionalDetails } from './AdditionalDetails';
import { wrap } from 'module';

describe('AdditionalDetails', () => {

    const mockProps = {
        transformedData: {
            feelsLike: 10,
            tempMin: 5,
            tempMax: 7
        },
        unit: 'testUnit',
        weatherData: {
            main: {
                humidity: 'test',                
            },
            wind: {
                speed: 'test'
            }
        }
    }
    
    const wrapper = mount(<AdditionalDetails {...mockProps}/>)

    it('should render the component', () => {
        expect(wrapper).toBeTruthy();
    })

});
