import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-examen2',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './examen2.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Examen2Component { 
  formRegister!: FormGroup;
  formRegister2!: FormGroup;
  p=false;
  pt=false;
    private Fb=inject(FormBuilder);
   constructor(){
      
      //console.log(this.formRegister);
      this.formRegister=this.Fb.group({
        nombre: ['',[Validators.required,Validators.minLength(4)]],
        codigo: ['',[Validators.required,Validators.minLength(8),Validators.maxLength(8)]],
        precio: ['',[Validators.required,Validators.max(1000),Validators.min(250)]],
        descripcion:[''],
        
        
  
      });
      this.formRegister2=this.Fb.group({
        nombre: ['',[Validators.required]],
        apellido: ['',[Validators.required]],
        telefono: ['',[Validators.required,Validators.pattern('^[0-9]{10}$')]],
        telefono2: ['',[Validators.required,Validators.pattern('^[0-9]{10}$')]],
       
        
        
  
      });
    
    }
  register(){
    if(this.formRegister.invalid){
      this.formRegister.markAllAsTouched()
      this.pt=true;
      return
      console.log("enviar datos")
    }else{
      console.log(this.formRegister.value);
    }
  }
  getErrorMessages(controlName: string): string[] {
    const control = this.formRegister2.get(controlName);
    const messages: any[] = [];
    
    if (control?.errors && control.touched) {
      this.p=false;
    

      Object.keys(control.errors).forEach((keyError) => {
        switch (keyError) {
          case 'required':
            messages.push('Este campo es requerido');
            this.p=false;
            break;
          case 'minlength':
            messages.push(`no tiene suficuinente caracteres`);
            break;
          case 'mixlength':
            messages.push(`El campo debe tener al menos 10`);
            break;
          case 'forbiddenName':
            messages.push(`no`);
            break;
          case 'pattern':
            messages.push(`esta mal rellenado`);
            break;
          case 'passwordif':
            messages.push(`esta mal rellenado`);
            break;
          
          default:
            messages.push('Error desconocido');
            console.log(keyError);
            break;
        }
      });
    }else{
      this.p=true;
    }
  
    return messages;
  }
}
