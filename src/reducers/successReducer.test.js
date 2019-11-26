import { actionTypes } from "../actions/index";
import successReducer from './successReducer'

test('returns default initial state of `false` when no action is passsed', () => {
    const newState = successReducer(undefined, { type: null })
    expect(newState).toBe(false)
})
test('returns state of true upon receiving an action of type `CORRECT_GUESS`', () => {
    const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS })
    expect(newState).toBe(true)
})