import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPIPE'
})
export class CustomPIPEPipe implements PipeTransform {

  transform(value:number): number {
    return value*value;
  }

}
