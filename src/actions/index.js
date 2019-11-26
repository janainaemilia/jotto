
export const actionTypes = {
    CORRET_GUESS: 'CORRET_GUESS',
}

/**
 * @function correctGuess
 * @returns {object} - Action object with type 'CORRECT_GUESS'
 */
export function correctGuess(){
    return { type: actionTypes.CORRET_GUESS }
}