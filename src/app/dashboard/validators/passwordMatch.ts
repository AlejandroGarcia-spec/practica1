import { group } from "@angular/animations";
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function matchPassword(password:string,conficPass:string):ValidatorFn{
    return(group:AbstractControl):ValidationErrors|null=>{
        const passwordControl=group.get(password);
        const confirmPass=group.get(conficPass);
        if(!passwordControl || !confirmPass){
            return null;
        }
        if(passwordControl.value==confirmPass.value){
            confirmPass?.setErrors({passwordDif:true})
            return{passwordDif:true}
        }else{
            confirmPass?.setErrors(null);
            return null
        }
    };
}