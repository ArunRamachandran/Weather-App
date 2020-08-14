import { createStore } from 'redux';
import rootReducer from '../reducers';

describe('createStore', () => {
    it('exposes the public APIs', () => {
        const store = createStore(rootReducer);
        const methods = Object.keys(store);

        expect(methods.length).toBe(4);
        expect(methods).toContain('subscribe');
        expect(methods).toContain('dispatch')
        expect(methods).toContain('getState')
        expect(methods).toContain('replaceReducer')
    })

    it('throws if reducer is not a function', () => {
        expect(() => createStore()).toThrow();
        expect(() => createStore('test')).toThrow()
        expect(() => createStore({})).toThrow()
        expect(() => createStore(() => {})).not.toThrow()
    })
});
