import Tokenencdec from './index';

const fecha = Date.now();
const token = 
{
	"uuid":"da70c58e-cbda-4f4d-8217-8d3683f4ec24",
	"callback":"account-settings",
	"createdAt": Date.now()
};

const e =(token: any) => {
	return Tokenencdec.e(token);
}

const d = (str: string) => {
	return Tokenencdec.d(str);
}

console.log(`==Enc-1\n${e(token)}`);

console.log(`===Dec-1\n${d('U2FsdGVkX1+Zq0zWZm9E3fEt2rFtS8qkcyXpj6u1d/RrAie2R4nJHcmDDLYj0p2LIpZY7cwvn7lh5pudyBoQtzs5L/T1HOHMMfTPEoEnKnAL3Ad9HRL3O+hbd6iHeE9vkzhadugA4nM7ZHaNE1iO0Q==')}`);

console.log(`===Dec-o\n${d('U2FsdGVkX19nLVFGYWkX5GAd9WnYaBOzg8gW1kUgN9f4WwkWzvRdogsP54P44ilG8XtwyurlTVfoTPwKiuhAnnYlz6Orj7ZG6LKiZ9lk+N+BVsSoojhgS9uMeCBUPJvWQrNRj+/hVqK1hfoM3Uj0XmahcD108ZL1KvXVM/Vm+L4=')}`);
