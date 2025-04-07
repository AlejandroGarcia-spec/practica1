import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toMinutes',
  standalone: true
})
export class ToMinutesPipe implements PipeTransform {

  transform(segundos:number): string {
    const min=segundos/60
    const resp=min.toString()+' minutos';
    return resp;
  }

}
