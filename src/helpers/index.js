/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - Guessed word
 * @param {string} secretWord - Secret word
 * @returns {number} - Number of letter matched between guessed word and the secret word
 */
export function getLetterMatchCount(guessedWord, secretWord) {
    const guessedWordSet = new Set(guessedWord.split(''))
    const secretLetterSet = new Set(secretWord.split(''))
    return [ ...secretLetterSet].filter(letter => guessedWordSet.has(letter)).length
}