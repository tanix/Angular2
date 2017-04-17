import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'datapicker',
	templateUrl: 'datapicker.component.html',
	styles: [require('./datapicker.component.scss')],
	changeDetection: ChangeDetectionStrategy.Default
})

export class datapickerComponent { }
