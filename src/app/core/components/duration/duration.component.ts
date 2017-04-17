import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'duration-component',
	templateUrl: 'duration.component.html',
	styles: [require('./duration.component.scss')],
	changeDetection: ChangeDetectionStrategy.Default,
})

export class durationComponent { }
