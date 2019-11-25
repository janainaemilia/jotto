import React from 'react'
import ProtoTypes from 'prop-types'

const GuessedWord = (props) => {
    return (
        <div />
    )
}

GuessedWord.protoTypes = {
    guessedWords: ProtoTypes.arrayOf(
        ProtoTypes.shape({
            guessedWords: ProtoTypes.string.isRequired,
            letterMatchCount: ProtoTypes.number.isRequired
        })
    ).isRequired,
} 

export default GuessedWord