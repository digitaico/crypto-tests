import { AES, enc } from 'crypto-js';

export default class Crypter {

	static hash = "jeam";

	static encrypt(str: string) {
		return AES.encrypt(str, this.hash).toString();
	}

	static decryptWithHash(str: string, hash: string) {
		try{
			return AES.decrypt(str, hash).toString(enc.Utf8);
		} catch(e) {
			if (e.message === 'Malformed UTF-8 data') {
				return '';
			}
			throw e;
		}
	}

	static decrypt(str: string) {
		return this.decryptWithHash(str, this.hash);
	}
}
