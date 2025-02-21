import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './reactiveForms.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ReactiveFormsComponent { 
  formRegister!: FormGroup;
  formProduct!: FormGroup;
  private Fb=inject(FormBuilder);
  constructor(){
    this.formRegister=this.Fb.group({
      nombre: ['',[Validators.required,Validators.minLength(3)]],
      password:['',[Validators.required,Validators.minLength(8)]],
      email:['',Validators.required]
    });
    console.log(this.formRegister);
    this.formProduct=this.Fb.group({
      nombre: ['salsa',[Validators.required,Validators.minLength(3)]],
      descripcion:['ftyguhbinjokp',[Validators.required,Validators.minLength(10)]],
      pEntrada:[5,[Validators.required,Validators.min(1)]],
      Psalida:[5,[Validators.required,Validators.min(1)]],
      stock:[5,[Validators.required,Validators.min(1)]],
      

    });
    console.log(this.formRegister);
  }
  register(){
    if(this.formRegister.invalid){
      this.formRegister.markAllAsTouched()
      return
      console.log("enviar datos")
    }else{
      console.log(this.formRegister.value);
    }
  }
  getErrorMessages(controlName: string): string[] {
    const control = this.formRegister.get(controlName);
    const messages: any[] = [];
  
    if (control?.errors && control.touched) {
      Object.keys(control.errors).forEach((keyError) => {
        switch (keyError) {
          case 'required':
            messages.push('Este campo es requerido');
            break;
          case 'minlength':
            messages.push(`El campo debe tener al menos 3`);
            break;
          
          default:
            messages.push('Error desconocido');
            break;
        }
      });
    }
  
    return messages;
  }
  getErrorMessages2(controlNam: string): string[] {
    const control = this.formProduct.get(controlNam);
    const messages: string[] = [];
  
    if (control?.errors && control.touched) {
      Object.keys(control.errors).forEach((keyError) => {
        switch (keyError) {
          case 'required':
            messages.push('Este campo es requerido');
            break;
          case 'min':
            messages.push(`El valor mínimo permitido es `);
            break;
          case 'maxlength':
            messages.push(`El campo no puede superar los  caracteres`);
            break;
          default:
            messages.push('Error desconocido');
            break;
        }
      });
    }
  
    return messages;
  }
  
 
}
