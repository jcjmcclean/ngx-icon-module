// Import angular dependencies
import { Injectable, Optional } from '@angular/core';

// Define icon config
export class IconServiceConfig {
	public basePath: string;
}

/** Make service injectable */
@Injectable()

// Export service
export class IconService {

	/** Base path for SVG sprite */
	private path: string = '/assets';

	/**
	 * Creates an instance of IconService.
	 * @param {IconServiceConfig} config
	 */
	constructor(@Optional() config: IconServiceConfig) {
		this.path = config ? config.basePath : '/assets';
	}

	/** Get base path */
	get basePath(): string {
		return this.path;
	}
}