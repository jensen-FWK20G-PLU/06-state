import { useRecoilState } from 'recoil'
import { nameState } from '../../atoms/nameState'


const UserName = () => {
	const [name, setName] = useRecoilState<string>(nameState)
	return (
		<input
			type="text"
			value={name}
			onChange={e => setName(e.target.value)}
			/>
	)
}

export default UserName
