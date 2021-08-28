import Crypter from './crypter';
import qs from 'querystring';

export type TokenData = {
	clientUuid: string
	callback: string
	createdAt: number
}

<<<<<<< HEAD
export default class MagicLink {
	static generate(token: TokenData) {
		return Crypter.encrypt(token.toString());
	}
	
=======
export default class Tokenencdec {
	static e (str: TokenData) {
		return Crypter.encrypt(qs.stringify(str));
	}

	static d (str: string) {
		return Crypter.decrypt(str);
	}

>>>>>>> c0da036dad0019d9c39fb892f0f1e3b4c1181256
}
