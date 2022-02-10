import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { actions } from '../features/counter'

const Counter = () => {
	const dispatch = useDispatch()
	const count = useSelector((state: RootState) => state.count)

	const handleIncrease = () => dispatch(actions.increase())
	const handleDecrease = () => dispatch(actions.decreaseBy2())
	
	return (
		<div>
			Värdet är: {count} <br />
			<button onClick={handleIncrease}> +1 </button>
			<button onClick={handleDecrease}> -2 </button>
		</div>
	)
}

export default Counter
