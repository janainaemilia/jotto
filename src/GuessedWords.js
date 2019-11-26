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
    }else{
        const guessedWordsRows = props.guessedWords.map((word, index) => (
            <tr data-test='guessed-word' key={index}>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
            </tr>
        ))

        contents = (
            <div data-test='guessed-words'>
                <h3>Guessed Words</h3>
                <table className='table table-sm'>
                    <thead className='thead-light'>
                        <tr>
                            <th>Guess</th>
                            <th>Matching Letters</th>
                        </tr>
                    </thead>
                    <tbody>
                        { guessedWordsRows }
                    </tbody>
                </table>
            </div>
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