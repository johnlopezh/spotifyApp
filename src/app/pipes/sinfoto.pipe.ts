import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(imagenes: any[]): any {
    let noimage = 'assets/img/noimage.png';
    if ( !imagenes) {
      return  noimage;
    }
    // Valida si el arreglo tiene imagenes y ? para entonces
    // la posición 1
    return ( imagenes.length > 0) ? imagenes[1].url : noimage;
  }

}
