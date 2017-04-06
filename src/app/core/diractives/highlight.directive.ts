import { Directive, ElementRef, Input, OnInit } from '@angular/core';

const BORDER_GREEN = "#3CB371";
const BORDER_BLUE = "#5bc0de";

@Directive({
	selector: '[myHighlight]'
})

export class HighlightDirective implements OnInit {
	@Input() createdDate: Date;
	borderColor: string;

	constructor(private el: ElementRef) { }

	ngOnInit() {
		this.highlightBorder();
	}

	private highlightBorder() {
		let currentDate = new Date();

		let _createdDate = new Date(this.createdDate);
		let tempDate = new Date(currentDate);
		let expiredDate = new Date(tempDate.setDate(tempDate.getDate() - 14));

		if((_createdDate < currentDate) && (_createdDate >= expiredDate)) {
			this.borderColor = BORDER_GREEN;
			this.el.nativeElement.style.borderColor = this.borderColor;
		}
		if(_createdDate > currentDate ) {
			this.borderColor = BORDER_BLUE;
			this.el.nativeElement.style.borderColor = this.borderColor;
		}
	}
}
