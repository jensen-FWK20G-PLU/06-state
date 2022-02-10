import { useRecoilState } from 'recoil'
import { nameState } from '../../atoms/nameState'

const ShowUser = () => {
	const [name/*, setName*/] = useRecoilState<string>(nameState)
	return (
		<span> Inloggad som <strong>{name}</strong>. </span>
	)
}

export default ShowUser
