import { createReducer, createAction } from '@reduxjs/toolkit'

// Actions
const increase = createAction('increase value by 1')
const decreaseBy2 = createAction('decrease value by 2')

const actions = { increase, decreaseBy2 }


const initialState = 10


// Reducer
const reducer = createReducer(initialState, {
	[increase.toString()]: (state, action) => state + 1,
	[decreaseBy2.toString()]: (state, action) => state - 2
})


export { actions, reducer }
