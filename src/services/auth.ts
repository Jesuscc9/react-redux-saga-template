import axios from "axios";

interface UserCredentials {
	username: string,
	password: string,
}

const { BASE_URL } = process.env;

export class AuthService {
	login = async (credentials: UserCredentials) => {
		return await axios.post(`${BASE_URL}/signin`, credentials);
	}
}