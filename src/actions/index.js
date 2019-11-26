
export const actionTypes = {
    CORRET_GUESS: 'CORRET_GUESS',
    GUESS_WORD: 'GUESS_WORD',
}

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action
 *          and (conditionaly) CORRECT_GUESS action
 * @function guessedWord
 * @param {string} guessedWord - Guessed word.
 * @returns {function} - Redux Thunk function.
 */
export const guessedWord = (guessedWord) => {
    return function(dispatcher, getState) {

    }
}