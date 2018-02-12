module TypeScriptDyn365Demo {
    interface IMessage {
        send(message: string): boolean; 
    }; 

    export class Activity {

        private startDate: Date; 
        private enddate: Date; 

        constructor() {
            console.log("Activity created"); 
        }

        public start(startDate: Date) {
            this.startDate = startDate; 
        }

        public close() {
            this.enddate = new Date(); 
        }
    }; 

    export class TextMessage extends Activity implements IMessage 
    {
        private from: string; 
        private to: string; 

        constructor(from: string, to: string) {
            super(); 
            console.log("Text message created");
        }

        public send(message: string): boolean {
            return true; 
        }
    }

    var message = new TextMessage("pg@wp.pl", "ewa@gmail.com");
    message.start(new Date());
    var result = message.send("Hello message!");
    if (result) {
        message.close(); 
    }
 
}