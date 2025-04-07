import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-array-form',
  standalone: true,
  imports: [ReactiveFormsModule,NgFor,FormsModule],
  templateUrl: './arrayForm.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export default class ArrayFormComponent { 
  taskForm!:FormGroup;
  topinForm!:FormGroup;
  nuevaTarea: string = '';
  private fb=inject(FormBuilder)
  private fb2=inject(FormBuilder)
  postres=['mini hotcakes','hot catkes','wafles','marquesitas']
  pago=['transferencia','efectivo','paypal']
  
  constructor(){
    
    this.taskForm=this.fb.group({
      tareas:this.fb.array([]),
      
    });
    this.topinForm=this.fb2.group({
      tareas2:this.fb2.array([]),
      
    });

  }
  get task():FormArray{
    return this.taskForm.get('tareas')as FormArray
  }
  addTask(){
    this.task.push(this.fb.control('',Validators.required))
    console.log(this.task)
  }
  get toppin(): FormArray {
    return this.topinForm.get('tareas2') as FormArray;
  }

  // Método para agregar un nuevo campo de tarea
  addToppin() {
    this.toppin.push(this.fb2.control('', Validators.required));
  }
  enviarFormulario(){
    if(this.taskForm){
      console.log('enviado',this.taskForm.value)
    }else{
      console.log('nell')
    }
  }
  removeTask(index:number){
    this.task.removeAt(index);
  }
}
