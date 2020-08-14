import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { WeatherApp } from './containers/WeatherApp';

class App extends Component {
    
    render() {
        return(
            <Provider store={store}>
                <WeatherApp/>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));