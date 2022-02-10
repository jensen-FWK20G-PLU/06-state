import { atom } from 'recoil'

const nameState = atom({
	key: 'user name atom',
	default: ''
})

export { nameState }
