import Crypter from './crypter';

export type TokenData = {
	clientUuid: string
	callback: string
	createdAt: number
}

export default class MagicLink {
	static generate(token: TokenData) {
		return Crypter.encrypt(token.toString());
	}
	
}
