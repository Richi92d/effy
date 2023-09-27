import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../interfaces/project.interface';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: Project): any {
    let coutProjet = value.surface * 80;
    return (coutProjet * 0.75) - (value.revenu / value.nbrPers) * 0.15;
  }

}
