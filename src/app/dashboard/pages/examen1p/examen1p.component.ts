import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-examen1p',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './examen1p.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Examen1pComponent {
  formRegister!: FormGroup;
    private Fb=inject(FormBuilder);
    constructor(){
      this.formRegister=this.Fb.group({
        nombre: ['Alejandro',[Validators.required,Validators.minLength(3)]],
        apellido: ['gomes',[Validators.required,Validators.minLength(3)]],
        password:['1234',[Validators.required,Validators.minLength(8)]],
        email:['oeo@gmail.com',Validators.required],
        edad:['45',Validators.required],
      });
    }
  morado=true;
  verde=true;
  grade=10

  verdee(){
    if(this.morado==true){
      this.morado=!this.morado;
    }
    
  }
  moradoo(){
    if(this.verde==true){
      this.verde=!this.verde;
    }
  }
  gris(){
    this.morado=true;
    this.verde=true;
  }


 }
