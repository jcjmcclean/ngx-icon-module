// Import angular dependencies
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
// Import app dependencies
import { IconComponent } from './icon.component';
import { IconService, IconServiceConfig } from './icon.service';

/** Define module */
@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		IconComponent
	],
	providers: [
		IconService
	],
	exports: [
		IconComponent
	]
})

// Export module
export class IconModule {
	/**
	 * @static
	 * @param {IconServiceConfig} basePath
	 * @returns {ModuleWithProviders}
	 */
	static forRoot(basePath: IconServiceConfig): ModuleWithProviders {
		return {
			ngModule: IconModule,
			providers: [
				{
					provide: IconServiceConfig,
					useValue: basePath
				}
			]
		};
	}
}