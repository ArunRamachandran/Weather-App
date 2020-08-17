import React from 'react';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store'
import { updatePreferredConversion } from '../actions/actions';
import { ActionBar } from './ActionBar';
import { Toggle } from '../components/Toggle';
import { Provider } from 'react-redux';
import * as Constants from '../constants/constants';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(fn => fn()),
    Provider: ({ Children }) => Children
}));

const mockStore = configureStore(),

initialState = {
    weatherData: {
        preferredConversion: Constants.CELSIUS,
        weather: []
    }
},
store = mockStore(initialState);

const dispatch = jest.fn().mockImplementation(() => Promise.resolve());

jest.mock('../actions/actions', () => ({
    updatePreferredConversion: jest.fn()
}))

jest.mock('../components/Toggle', () => 'Toggle');

describe('ActionBar', () => {
    const wrapper = mount(
        <Provider store={store}>
            <ActionBar 
                onChange={jest.fn()}
                />
        </Provider>
    )

    it('should run', () => {
        expect(wrapper.find(Toggle)).toHaveLength(1);
    })
});
