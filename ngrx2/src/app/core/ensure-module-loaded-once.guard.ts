import { Injectable, NgModule } from '@angular/core'

@Injectable()
export class EnsureModuleLoadedOnceGuard {
    constructor(targetModule: NgModule) {
        if (targetModule) {
            throw new Error(
                `${targetModule.constructor.name} has already been loaded. Import this module in the AppModule only.`
            )
        }
    }
}
