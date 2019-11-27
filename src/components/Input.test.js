import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr, storeFactory } from '../../test/testUtils' 
import Input from './Input'

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component.
 * @function setup
 * @param {object} initialState 
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
    const store = storeFactory(initialState)
    // We use .dive() to get the low leval html element in a component
    const wrapper = shallow(<Input store={store} />).dive().dive()
    return wrapper
    // Just to check what is returning in wrapper
    // console.log(wrapper.debug())
}

describe('render', () => {
    describe('word has not been guessed', () => {
        let wrapper

        beforeEach(() => {
            const initialState = { success: false}
            wrapper = setup(initialState)
        })

        test('renders component without error', () => {
            const component = findByTestAttr(wrapper, 'component-input')
            expect(component.length).toBe(1)
        })
        test('renders input box', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box')
            expect(inputBox.length).toBe(1)
        })
        test('renders submit button', () => {
            const submitButtom = findByTestAttr(wrapper, 'submit-buttom')
            expect(submitButtom.length).toBe(1)
        })
    })
    describe('word has been guessed', () => {
        let wrapper

        beforeEach(() => {
            const initialState = { success: true}
            wrapper = setup(initialState)
        })

        test('renders component without error', () => {
            const component = findByTestAttr(wrapper, 'component-input')
            expect(component.length).toBe(1)
        })
        test('does not render input box', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box')
            expect(inputBox.length).not.toBe(1)
        })
        test('does not render submit button', () => {
            const submitButtom = findByTestAttr(wrapper, 'submit-buttom')
            expect(submitButtom.length).not.toBe(1)
        })
    })
})

describe('redux props', () => {
    test('has success piece of state as props', () => { 
        const success = true
        const wrapper = setup({ success })
        const successProp = wrapper.instance().props.success
        expect(successProp).toBe(success)
    })
    test('`guessedWord` action creator is a function prop', () => {
        const wrapper = setup()
        const guessWordProp = wrapper.instance().props.guessWord
        expect(guessWordProp).toBeInstanceOf(Function)
    })
})