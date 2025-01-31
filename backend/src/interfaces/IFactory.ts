export default interface IFactory<Model, DbModel> {
	make(data: Partial<Model>): Model;
	create(data: Partial<DbModel>): Promise<DbModel>;
}
