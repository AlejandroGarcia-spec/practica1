import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder,Validators } from '@angular/forms';
import { forbiddenName } from '../../validators/no_name';
import { matchPassword } from '../../validators/passwordMatch';
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
  formNuevo!: FormGroup;
  private Fb=inject(FormBuilder);
  constructor(){
    this.formRegister = this.Fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), forbiddenName()]],
      telefono: ['', [
        Validators.required, 
        
        Validators.pattern('^[0-9]{10}$') // Solo 10 dígitos numéricos
      ]],
      fullName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+ [a-zA-Z]+$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPass: ['', [Validators.required]], // Corregido
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]]
    }, { validators: matchPassword('password', 'confirmPass') }); // Corregido
    
    //console.log(this.formRegister);
    this.formProduct=this.Fb.group({
      nombre: ['salsa',[Validators.required,Validators.minLength(3)]],
      descripcion:['ftyguhbinjokp',[Validators.required,Validators.minLength(10)]],
      pEntrada:[5,[Validators.required,Validators.min(1)]],
      Psalida:[5,[Validators.required,Validators.min(1)]],
      stock:[5,[Validators.required,Validators.min(1)]],
      

    });
    this.formNuevo=this.Fb.group({
      NameandAsunto: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9 ]+$/)]],

      message:['',[Validators.required,Validators.minLength(20),Validators.maxLength(35)]],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      

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
            messages.push(`El campo debe tener al menos 10`);
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
  getErrorMessages3(controlNam: string): string[] {
    const control = this.formNuevo.get(controlNam);
    const messages: string[] = [];
    //console.log(controlNam)
  
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
            case 'minlength':
            messages.push(`El campo debe tener al menos 20`);
            break;
          case 'pattern':
            messages.push(`campo rellenado mal`);
            break;
          default:
            console.log(keyError)
            messages.push('Error desconocido');
            break;
        }
      });
    }
  
    return messages;
  }
  
 
}
