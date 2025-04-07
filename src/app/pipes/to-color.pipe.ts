import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toColor',
  standalone: true
})
export class ToColorPipe implements PipeTransform {

  transform(price: number): string {
    console.log(price)
    if (price < 500) {
      return 'text-green-600'; 
    } else if (price < 1000) {
      return 'text-yellow-600'; 
    } else {
      return 'text-red-600'; 
    }
  }
}
