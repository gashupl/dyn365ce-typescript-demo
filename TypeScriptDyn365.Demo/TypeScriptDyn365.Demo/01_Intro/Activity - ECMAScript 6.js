var TypeScriptDyn365Demo;
(function (TypeScriptDyn365Demo) {
    ;
    class Activity {
        constructor() {
            console.log("Activity created");
        }
        start(startDate) {
            this.startDate = startDate;
        }
        close() {
            this.enddate = new Date();
        }
    }
    ;
    class TextMessage extends Activity {
        constructor(from, to) {
            super();
            console.log("Text message created");
        }
        send(message) {
            return true;
        }
    }
    var message = new TextMessage("pg@wp.pl", "ewa@gmail.com");
    message.start(new Date());
    var result = message.send("Hello message!");
    if (result) {
        message.close();
    }
})(TypeScriptDyn365Demo || (TypeScriptDyn365Demo = {}));
//# sourceMappingURL=Activity.js.map