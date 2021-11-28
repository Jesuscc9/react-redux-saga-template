import axios, { AxiosInstance } from "axios";
import { authActions, store } from "../store";
import Cookies from "js-cookie";

export type ControllerType = 'users' | 'projects' | 'patients';

export class Service {
	protected pathname: string;
	service: AxiosInstance;

	constructor(pathname: ControllerType = "patients") {
		this.pathname = `/${pathname}`;
		this.service = axios.create({ baseURL: process.env.REACT_APP_API_URL });
		this.service.interceptors.request.use(async (config: any) => {
			const token = Cookies.get("auth");
			if (token) {
				config.headers.Authorization = `Bearer ${token}`;
				return config;
			} else {
				store.dispatch(authActions.logout());
				throw new axios.Cancel("Operation canceled");
			}
		});
	}

	me = async () => {
		const response = await this.service.get(`/me`);
		return response;
	}
}