import React from 'react'
import { shallow } from 'enzyme'

import { storeFactory } from '../test/testUtils' 
import App from './App'

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component.
 * @function setup
 * @param {object} initialState 
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
    const store = storeFactory(initialState)
    const wrapper = shallow(<App store={store} />).dive().dive()
    return wrapper
}

describe('redux props', () => {
  test('has success piece of state as props', () => {
      const success = true
      const wrapper = setup({ success })
      const successProp = wrapper.instance().props.success
      expect(successProp).toBe(success)
  })
  test('has access to `secretWord` state', () => {
    const secretWord = 'party'
    const wrapper = setup({ secretWord })
    const secretWordProp = wrapper.instance().props.secretWord
    expect(secretWordProp).toBe(secretWord)
  })
  test('has access to `guessedWords` state', () => {
    const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3}]
    const wrapper = setup({ guessedWords })
    const guessedWordsProps = wrapper.instance().props.guessedWords
    expect(guessedWordsProps).toEqual(guessedWords)
  })
  test('`guessedWord` action creator is a function prop', () => {
      const wrapper = setup()
      const getSecretWordProp = wrapper.instance().props.getSecretWord
      expect(getSecretWordProp).toBeInstanceOf(Function)
  })
})