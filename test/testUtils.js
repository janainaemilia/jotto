import checkPropTypes from 'check-prop-types'
<<<<<<< HEAD
import { createStore, applyMiddleware } from 'redux'

import rootReducer from '../src/reducers'
import { middlewares } from '../src/configureStore'

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 * globals: rootReducer, middlewares.
 * @param {object} initialState 
 * @function storeFactory
 * @returns {Store} - Redux store.
 */
export const storeFactory = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
    return createStoreWithMiddleware(rootReducer, initialState)
}
=======
>>>>>>> parent of 4ef7510... Set up Input component and storeFactory test util

/**
 * Return node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @return ShallowWrapper
 */
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
}

/**
 * 
 * @param {object} component 
 * @param {object} conformingProps 
 */
export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
            component.propTypes,
            conformingProps,
            'prop',
            component.name )
    expect(propError).toBeUndefined()
}