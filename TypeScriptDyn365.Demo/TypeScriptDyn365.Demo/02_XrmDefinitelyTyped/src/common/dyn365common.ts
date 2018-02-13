module Dyn365Common {

    export interface INavigation {
        openUrl(url: string, options: Xrm.SizeOptions): void; 
        alertDialog(message: string): void; 
    }

    export class Navigation implements INavigation {
        constructor() {
        }

        openUrl(url: string, options: Xrm.SizeOptions): void {
            Xrm.Navigation.openUrl(url, options); 
        }

        alertDialog(message: string): void {
            Xrm.Navigation.openAlertDialog({ text: message, confirmButtonLabel: undefined}); 
        }
    }

    export interface IDevice{
    }

    export class Device implements IDevice {
        constructor() {
        }
    }

    export interface IUtility {

    }

    export class Utility implements IUtility {
        constructor() {
        }
    }
}