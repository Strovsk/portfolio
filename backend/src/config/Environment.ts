export default class Environment {
	public user: string = process.env.USER || "";
	public password: string = process.env.PASSWORD || "";
	public secret: string = process.env.SECRET || "";
}
