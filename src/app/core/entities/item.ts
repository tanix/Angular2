export  class Course {
	public id: number;
	public title: string;
	public createDate: Date;
	public duration: string;
	public description: string;

	constructor(id: number, title: string, createDate: Date, duration: string, description: string) {
		this.id = id;
		this.title = title;
		this.createDate = createDate;
		this.duration = duration;
		this.description = description;
	}
}

