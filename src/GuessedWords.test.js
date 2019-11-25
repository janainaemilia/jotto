import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from '../test/testUtils'
import GuessedWords from './GuessedWords'

const defaultProps = {
    guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
}

/**
 * Factoty function to create a ShallowWrapper for the GuessedWords component.
 * @function setup
 * @param {object} props - Components props specific to this setup
 * @return {ShallowWrapper}
 */
const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<GuessedWords {...setupProps}/>)
}

test('does not throw warning with expected props', () => {
    checkProps(GuessedWords, defaultProps)
})