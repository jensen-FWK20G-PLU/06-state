import { combineReducers } from 'redux'
// importera våra egna reducers allt eftersom
import { reducer as count } from './counter'

const rootReducer = combineReducers({
	// här lägger vi till våra reducers
	count: count
})

// Så här ser vår state ut: { count }

export { rootReducer }
