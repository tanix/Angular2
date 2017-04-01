import { Directive, ElementRef, HostListener, Input, AfterContentChecked } from '@angular/core';

@Directive({
	selector: '[myHighlight]'
})

export class HighlightDirective implements AfterContentChecked {
	@Input() createdDate: any;
	boxShadow: string;
	currentDate: any;
	_createdDate: any;
	expiredDate : any;
	borderColor: string;

	constructor(private el: ElementRef) {
		this.boxShadow = '0 0 20px 0 #DCDCDC';
		this.currentDate = new Date();
		this.expiredDate = new Date();
	}

	ngAfterContentChecked() {
		this.highlightBorder(this.createdDate);
	}

	@HostListener('mouseenter') onMouseEnter() {
		this.highlight(this.boxShadow);
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.highlight(null);
	}

	private highlight(boxShadow: string) {
		this.el.nativeElement.style.boxShadow = boxShadow;
	}

	private highlightBorder(createdDate: any) {
		this._createdDate = new Date(createdDate);

		var date = new Date(this.currentDate);
		this.expiredDate = new Date(date.setDate(date.getDate() - 14));

		if((this._createdDate < this.currentDate) && (this._createdDate >= this.expiredDate)) {
			this.borderColor = '#3CB371';
			this.el.nativeElement.style.borderColor = this.borderColor;
		}
		if(this._createdDate > this.currentDate ) {
			this.borderColor = '#5bc0de';
			this.el.nativeElement.style.borderColor = this.borderColor;
		}
	}
}
