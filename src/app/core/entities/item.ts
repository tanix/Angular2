export  class Item {
	public id: number;
	public title: string;
	public startDate: string;
	public endDate: string;
	public duration: string;
	public description: string;

	constructor(id: number, title: string, startDate: string, endDate: string, duration: string, description: string) {
		this.id = id;
		this.title = title;
		this.startDate = startDate;
		this.endDate = endDate;
		this.duration = duration;
		this.description = description;
	}
}

