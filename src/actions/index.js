import axios from 'axios'

import { getLetterMatchCount } from '../helpers'

export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS',
    GUESS_WORD: 'GUESS_WORD',
    SET_SECRECT_WORD: 'SET_SECRECT_WORD',
}

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action
 *          and (conditionaly) CORRECT_GUESS action
 * @function guessWord
 * @param {string} guessedWord - Guessed word.
 * @returns {function} - Redux Thunk function.
 */
export const guessWord = (guessedWord) => {
    return function(dispatch, getState) {
        const secretWord = getState().secretWord
        const letterMatchCount = getLetterMatchCount(guessedWord, secretWord)

        dispatch({
            type: actionTypes.GUESS_WORD,
            payload: { guessedWord, letterMatchCount }
        })

        if(guessedWord === secretWord){
            dispatch({ type: actionTypes.CORRECT_GUESS })
        }
    }
}

export const getSecretWord = () => {
    return (dispatch) => {
        return axios.get('http://localhost:3030')
            .then((response) => {
                dispatch({ type: actionTypes.SET_SECRECT_WORD, payload: response.data })
            })
    }
}