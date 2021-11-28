import axios from "axios";

interface UserCredentials {
	username: string,
	password: string,
}

const { REACT_APP_API_URL } = process.env;

export class AuthService {
	login = async (credentials: UserCredentials) => {
		return await axios.post(`${REACT_APP_API_URL}/signin`, credentials);
	}
}