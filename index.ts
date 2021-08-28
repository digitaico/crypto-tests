import Crypter from './crypter';
import qs from 'querystring';

export type TokenData = {
	clientUuid: string
	callback: string
	createdAt: number
}

export default class Tokenencdec {
	static e (str: TokenData) {
		return Crypter.encrypt(qs.stringify(str));
	}

	static d (str: string) {
		return Crypter.decrypt(str);
	}

}
