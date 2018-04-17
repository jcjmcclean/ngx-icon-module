// Import angular dependencies
import { Component, Input } from '@angular/core';
// Import app dependencies
import { IconService } from './icon.service';

/** Define component */
@Component({
	selector: 'svg-icon', // tslint:disable-line
	templateUrl: './icon.component.html',
	styles: [`
		.icon {
			width: 100%;
			height: 100%;
			display: inline-block;
			vertical-align: middle;
		}
  	`]
})

// Export component
export class IconComponent {

	/** Base path for SVG sprite */
	public basePath = this.config.basePath;

	/** Symbol ID value from SVG sprite */
	@Input('name') name: string;

	/**
	 * Creates an instance of Icon.
	 * @param {IconService} config
	 */
	constructor(public config: IconService) { }
}