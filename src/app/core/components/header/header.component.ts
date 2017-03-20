import { Component, ViewEncapsulation } from '@angular/core';
import { authorizationService } from '../../services';

@Component({
	selector: 'main-header',
	templateUrl: 'header.component.html',
	styles: [require('./header.component.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class HeaderComponent{
	public logoSrc: string = 'assets/icon/android-icon-72x72.png';
	private isLogined: boolean = false;

	constructor(public authorizationService: authorizationService) {
		this.isLogined = this.authorizationService.isAuthenticated();
	}

}
