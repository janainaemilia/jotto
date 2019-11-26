import React from 'react'
import ProtoTypes from 'prop-types'

const GuessedWord = (props) => {
    let contents

    if(props.guessedWords.length === 0) {
        contents = (
            <span data-test="guess-instructions">
                Try to guess the secret word!
            </span>
        )
    }
    return (
        <div data-test="component-guessed-words">
            {contents}
        </div>
    )
}

GuessedWord.protoTypes = {
    guessedWords: ProtoTypes.arrayOf(
        ProtoTypes.shape({
            guessedWord: ProtoTypes.string.isRequired,
            letterMatchCount: ProtoTypes.number.isRequired
        })
    ).isRequired,
} 

export default GuessedWord