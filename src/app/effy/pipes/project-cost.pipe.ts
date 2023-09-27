import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'projectCost'
})
export class ProjectCostPipe implements PipeTransform {

  transform(value: number): number {
    return value * 80;
  }

}
