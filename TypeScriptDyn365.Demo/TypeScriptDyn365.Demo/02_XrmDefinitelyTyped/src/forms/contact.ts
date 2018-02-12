module Contact {


    export class FormEventHandlers {

    }

    export class FormLogic {

        executionContext: Xrm.ExecutionContext<any>;
        formContext: Form.contact.Main.Contact;

        constructor(executionContext: Xrm.ExecutionContext<any>) {

            this.executionContext = executionContext;
            this.formContext = <Form.contact.Main.Contact>executionContext.getFormContext();
        }

        setAge(now: Date, birthday: Date) {

            if (now && birthday) {
                var age = this.calculateAge(now, birthday);
                this.formContext.getControl("foo_age").getAttribute().setValue(age); 
            }
        }

        calculateAge(now: Date, birthday: Date): number {
            var ageDifMs = now.getTime() - birthday.getTime();
            var ageDate = new Date(ageDifMs); 
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        }        
    }
}