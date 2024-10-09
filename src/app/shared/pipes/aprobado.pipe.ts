import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aprobado'
})
export class AprobadoPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'Aprobado' : 'Desaprobado';
  }

}
