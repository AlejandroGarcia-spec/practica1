import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
export function forbiddenName():ValidatorFn|null{
    return (control: AbstractControl):ValidationErrors | null=>{
        if(!control.value){
            return null;
        }
        console.log(control);
        const forbiddenValord='alejandro';
        if(control.value.toLowerCase()==forbiddenValord.toLowerCase()){
            return{
                forbiddenName:{value:control.value}
            }
        }
        return null;
    }
}