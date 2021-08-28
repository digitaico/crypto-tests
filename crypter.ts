import { AES, enc } from 'crypto-js';

const HASHVALUE = "Vu#p!A^07cA*q&!M2CAVhO%&Wo*fiTmHt%C7E@&GWztQhGmpbfK#A1Y&tep9V!zJ";

export default class Crypter {

	static encrypt(str: string) {
		return AES.encrypt(str, HASHVALUE).toString();
	}

	static decryptWithHash(str: string, hash: string) {
		return AES.decrypt(str, hash).toString(enc.Utf8);
	}

	static decrypt(str: string) {
//		console.log(`toke: ${str}\nhash: ${HASHVALUE}`)
		return this.decryptWithHash(str, HASHVALUE);
	}
}
